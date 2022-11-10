import {
  createSlice,
  SliceCaseReducers,
  createAsyncThunk,
  PayloadAction
} from '@reduxjs/toolkit';
import localStorageService from '../services/localStorage.service';
import sickService from '../services/sick.service';
import { Cache } from '../types/Cache';

export const getSickList = createAsyncThunk(
  'GET_SICKLIST',
  async (keyword: string) => {
    const { data: value } = await sickService.getSick(keyword);
    const date = +new Date();
    return { keyword, value, date };
  }
);

const initialState: Cache = {};

const sickSlice = createSlice<Cache, SliceCaseReducers<Cache>>({
  name: 'sick',
  initialState,
  reducers: {
    setSickList: {
      reducer: (state, action) => {
        state = action.payload;
        return state;
      },
      prepare: (payload: PayloadAction<Cache>) => {
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
