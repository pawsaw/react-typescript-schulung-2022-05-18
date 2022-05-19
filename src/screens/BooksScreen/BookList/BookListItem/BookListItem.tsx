import { Link } from 'react-router-dom';
import { Book } from '../../../../domain/books/Book';
import { BookSelected } from '../BookSelected';

export interface BookListItemsProps {
  book: Book;
  bookSelected: BookSelected;
}

export const BookListItem: React.FC<BookListItemsProps> = ({ book, bookSelected }) => {
  function bookClicked() {
    bookSelected(book);
  }

  return (
    <div>
      <span
        onClick={bookClicked}
        style={{
          color: 'blue',
          cursor: 'pointer',
        }}
      >
        {book.title}
      </span>
    </div>
  );
};
