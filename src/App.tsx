import './App.css';
import { BookList, BookSelected } from './components/BookList';
import { Counter } from './components/Counter';
import { books } from './data/books';
import { Book } from './domain/Book';


function App() {
  
  const bookSelected: BookSelected = (book: Book) => {
    alert(book.price)
  };
  
  
  return (
    <div className="App">
      <BookList books={books} bookSelected={bookSelected} />    
    </div>
    );
  }
  
  export default App;
  