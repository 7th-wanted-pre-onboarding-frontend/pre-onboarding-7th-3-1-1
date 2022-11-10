import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import sickSlice from './sick';

const rootReducer = combineReducers({
  sick: sickSlice
});

const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
