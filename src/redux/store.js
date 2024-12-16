

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import loginSlice from './slices/login-slice';

const setup = {
  key: 'maheshcoding',
  version: 1,
  storage: storage,
};

const slices = combineReducers({
  loginSlice // Ensure your app accesses state using state.loginSlice
});

const store = configureStore({
  reducer: persistReducer(setup, slices),
  devTools: true, // Enable Redux DevTools
  middleware: (config) =>
    config({
      serializableCheck: false,
    }),
});

console.log('Initial State:', store.getState()); // Debugging state structure

export default store;


