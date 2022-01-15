import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import ThunkMiddleware from 'redux-thunk';
import userReducer from './reducers/userReducer';

const composedEnhancer = applyMiddleware(ThunkMiddleware);

export const store = configureStore({
  reducer: {userReducer},
  composedEnhancer,
})