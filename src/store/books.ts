export interface BooksState {
  books: [];
}

export const initialState: BooksState = {
  books: [],
};

export const booksReducer = (state: BooksState = initialState): BooksState => {
  return state;
};
