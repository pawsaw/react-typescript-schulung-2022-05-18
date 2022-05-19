import React from 'react';
import { Book } from '../../../domain/books/Book';
import { noop } from '../../../utils/noop';

import { BookListItem } from './BookListItem';
import { BookSelected } from './BookSelected';

export interface BookListProps {
  books: Book[];
  bookSelected?: BookSelected;
}

export const BookList: React.FC<BookListProps> = ({ books, bookSelected = noop }) => {
  return (
    <div>
      {books.map((book) => (
        <BookListItem key={book.id} book={book} bookSelected={bookSelected} />
      ))}
    </div>
  );
};
