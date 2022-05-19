import { useHistory } from 'react-router-dom';
import { Book } from '../../domain/books/Book';
import { useBooks } from '../../domain/books/useBooks';
import { BookList, BookSelected } from './BookList';

export const BookScreen: React.FC = () => {
  const { books } = useBooks();
  const history = useHistory();

  const bookSelected: BookSelected = (book: Book) => {
    history.push(`/books/${book.isbn}`);
  };

  return (
    <div>
      <h2>Books</h2>
      {books ? <BookList books={books} bookSelected={bookSelected} /> : <span>Loading...</span>}
    </div>
  );
};
