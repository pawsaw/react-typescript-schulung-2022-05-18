import { Link, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { BookDetailScreen } from './screens/BookDetailScreen';
import { BookScreen } from './screens/BooksScreen';
import { PlaygroundScreen } from './screens/PlaygroundScreen';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/books">Books</Link>
        </li>
        <li>
          <Link to="/playground">Playground</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/books/:isbn">
          <BookDetailScreen />
        </Route>
        <Route path="/books">
          <BookScreen />
        </Route>
        <Route path="/playground">
          <PlaygroundScreen />
        </Route>
        <Redirect to="/books" />
      </Switch>
    </div>
  );
}

export default App;
