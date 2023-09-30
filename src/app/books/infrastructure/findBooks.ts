import { debounce } from '../../../utils/debounce';
import database from '../database.json';
import { ErrorCode } from '../../../utils/errors';
import Book from '../domain/Book';
import { BookDTO } from '../domain/BookDTO';

export type findBooksParams = {
  page?: number;
  perPage?: number;
  failRandomly?: boolean;
};

export async function findBooks({ page = 1, perPage = 25, failRandomly = false }: findBooksParams = {}) {
  await debounce();

  if (failRandomly) {
    return { error: { code: ErrorCode.SOMETHING_WENT_WRONG } };
  }

  return {
    data: database.books.slice((page - 1) * perPage, page * perPage - 1).map((eachBook: BookDTO) => {
      return new Book(eachBook.id, eachBook.title, eachBook.author, eachBook.price, eachBook.cover_url);
    }),
  };
}
