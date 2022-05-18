import { useState, useEffect } from 'react';
import { Book } from './Book';

export function useBooks(booksUrl: string): Book[] | null {
    const [books, setBooks] = useState<Book[] | null>(null);
    
    useEffect(() => {
        async function fetchBooks() {
            const response = await fetch(booksUrl);
            const _books = await response.json();
            setBooks(_books);
        }
        fetchBooks();
    }, [booksUrl]);
    
    return books;
}