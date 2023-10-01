import { debounce } from '../../../utils/debounce';
import Book from '../domain/Book';

export const postBook = async (book: Book) => {
  await debounce();
  return;
};
