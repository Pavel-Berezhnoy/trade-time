import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import ThunkMiddleware from 'redux-thunk';
import lotReducer from './reducers/lotReducer';
import userReducer from './reducers/userReducer';
import lotsReducer from './reducers/lotsReducer';

const composedEnhancer = applyMiddleware(ThunkMiddleware);

export const store = configureStore({
  reducer: {userReducer,lotReducer,lotsReducer},
  composedEnhancer,
})