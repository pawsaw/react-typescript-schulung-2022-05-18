import './App.css';
import { BookList, BookSelected } from './components/BookList';
import { Book } from './domain/books/Book';
import { useBooks } from './domain/books/useBooks';


function App() {
  
  const booksUrl = 'http://localhost:4730/books';

  const books = useBooks(booksUrl);

  const bookSelected: BookSelected = (book: Book) => {
    alert(book.price)
  };
  
  
  return (
    <div className="App">
      {
        books ? (
          <BookList books={books} bookSelected={bookSelected} />
        ) : (
          <span>Loading...</span>
        )
      }
    </div>
    );
  }
  
  export default App;
  