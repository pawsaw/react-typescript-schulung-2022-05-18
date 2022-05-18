import { Book } from '../../domain/Book';

export interface BookSelected {
    (book: Book): void;
}