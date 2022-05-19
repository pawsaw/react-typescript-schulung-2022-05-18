import { Book } from '../../../domain/books/Book';

export interface BookSelected {
  (book: Book): void;
}
