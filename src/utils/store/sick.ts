import {
  createSlice,
  SliceCaseReducers,
  createAsyncThunk,
  PayloadAction
} from '@reduxjs/toolkit';
import localStorageService from '../services/localStorage.service';
import sickService from '../services/sick.service';
import { Sicks } from '../types/Sick';

export const getSickList = createAsyncThunk(
  'GET_SICKLIST',
  async (keyword: string) => {
    const { data: value } = await sickService.getSick(keyword);
    const date = +new Date();
    return { keyword, value, date };
  }
);

type InitialState = {
  [key: string]: {
    value: Sicks;
    date: number;
  };
};

const initialState: InitialState = {};

const sickSlice = createSlice<InitialState, SliceCaseReducers<InitialState>>({
  name: 'sick',
  initialState,
  reducers: {
    setSickList: {
      reducer: (state, action) => {
        state = action.payload;
        return state;
      },
      prepare: (payload: PayloadAction<InitialState>) => {
        return { payload };
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getSickList.pending, (_, action) => {
      const { arg } = action.meta;
      console.info(`[ketword: ${arg}]calling apiing`);
    });
    builder.addCase(getSickList.fulfilled, (state, action) => {
      const { keyword, date, value } = action.payload;
      state[keyword] = {
        date,
        value
      };
      localStorageService.set('sicks', state);
    });
  }
});

export const { setSickList } = sickSlice.actions;
export default sickSlice.reducer;
