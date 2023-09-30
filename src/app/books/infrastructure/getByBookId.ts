import { debounce } from '../../../utils/debounce';
import database from '../database.json';
import Book from '../domain/Book';
import { BookDTO } from '../domain/BookDTO';
import { BookErrorCode } from '../domain/errors';

export const getByBookId = async (id: string) => {
  await debounce();

  const parsedId = parseInt(id);

  const book = database.books.find((eachBook: BookDTO) => eachBook.id === parsedId);
  if (!book) {
    throw new Error(BookErrorCode.NOT_FOUND);
  }

  return new Book(book.id, book.title, book.author, book.price, book.cover_url);
};
