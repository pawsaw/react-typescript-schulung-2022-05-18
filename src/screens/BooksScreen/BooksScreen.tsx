import { Book } from '../../domain/books/Book';
import { useBooks } from '../../domain/books/useBooks';
import { BookList, BookSelected } from './BookList';

export const BookScreen: React.FC = () => {
  const { books } = useBooks();

  const bookSelected: BookSelected = (book: Book) => {
    // alert(book.price);
  };

  return (
    <div>
      <h2>Books</h2>
      {books ? <BookList books={books} bookSelected={bookSelected} /> : <span>Loading...</span>}
    </div>
  );
};
