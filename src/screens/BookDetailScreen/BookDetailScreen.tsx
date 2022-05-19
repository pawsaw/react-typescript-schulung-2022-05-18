import React from 'react';
import { useParams } from 'react-router-dom';
import { useBook } from '../../domain/books/useBook';

export interface BookDetailScreenParams {
  isbn: string;
}

export const BookDetailScreen: React.FC = () => {
  const { isbn } = useParams<BookDetailScreenParams>();
  const { book } = useBook(isbn);

  return (
    <div>
      <h2>Book Detail</h2>
      {book ? (
        <div>
          isbn: {book.isbn}
          <br />
          title: {book.title}
          <br />
        </div>
      ) : (
        <span>Loading ...</span>
      )}
    </div>
  );
};
