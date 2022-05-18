import { useState, useEffect } from 'react';
import { Book } from './Book';

export interface UseBooksResult {
    books: Book[] | null;
    reload: () => void;
}

export function useBooks(booksUrl: string): UseBooksResult {
    const [books, setBooks] = useState<Book[] | null>(null);

    async function fetchBooks(_booksUrl: string) {
        const response = await fetch(_booksUrl);
        const _books = await response.json();
        setBooks(_books);
    }
    
    useEffect(() => {   
        fetchBooks(booksUrl);
    }, [booksUrl]);
    
    return {
        books,
        reload: () => {
            fetchBooks(booksUrl)
        }
    }
}