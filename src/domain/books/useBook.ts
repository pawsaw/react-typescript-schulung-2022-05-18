import { useState, useEffect } from 'react';
import { Book } from './Book';

export interface UseBookResult {
  book: Book | null;
  reload: () => void;
}

export function useBook(isbn: string): UseBookResult {
  const [book, setBook] = useState<Book | null>(null);

  async function fetchBook(isbn: string) {
    const response = await fetch(`http://localhost:4730/books/${isbn}`);
    const _book = await response.json();
    setBook(_book);
  }

  useEffect(() => {
    fetchBook(isbn);
  }, [isbn]);

  return {
    book: book,
    reload: () => {
      fetchBook(isbn);
    },
  };
}
