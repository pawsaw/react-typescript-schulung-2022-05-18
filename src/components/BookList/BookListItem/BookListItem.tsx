import React from 'react';
import { Book } from '../../../domain/books/Book';
import { BookSelected } from '../BookSelected';

export interface BookListItemsProps {
    book: Book;
    bookSelected: BookSelected;
}

export const BookListItem: React.FC<BookListItemsProps> = ({ book, bookSelected }) => {

    function bookClicked() {
        bookSelected(book);
    }

    return <div onClick={bookClicked}>{book.title}</div>
};