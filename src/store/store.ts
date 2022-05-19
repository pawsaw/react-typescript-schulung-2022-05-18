import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { booksReducer } from './books';

export const rootReducer = combineReducers({
  books: booksReducer,
});

export type Store = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});
