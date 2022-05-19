import { useState, useEffect } from 'react';
import { Book } from './Book';

export interface UseBooksResult {
  books: Book[] | null;
  reload: () => void;
}

export function useBooks(): UseBooksResult {
  const [books, setBooks] = useState<Book[] | null>(null);

  async function fetchBooks() {
    const response = await fetch('http://localhost:4730/books');
    const _books = await response.json();
    setBooks(_books);
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  return {
    books,
    reload: () => {
      fetchBooks();
    },
  };
}
