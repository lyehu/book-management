import { NavigateFunction } from 'react-router-dom';
import { getByBookId } from '../infrastructure/getByBookId';
import { BookErrorCode } from '../domain/errors';
import { postBook } from '../infrastructure/postBook';
import Book from '../domain/Book';
import { uuidv4 } from '../../../utils/uuid';

export const getBook = async (id: string | undefined, navigate: NavigateFunction) => {
  if (!id) {
    throw new Error(BookErrorCode.INVALID_PARAMS);
  }

  try {
    return await getByBookId(id);
  } catch (error) {
    navigate('/not-found', { replace: true });
  }
};

export type AddBookDTO = {
  title: string;
  author: string;
  price: string;
  coverUrl?: string;
};

export const addBook = async (book: AddBookDTO, navigate: NavigateFunction) => {
  try {
    await postBook(new Book(uuidv4(), book.title, book.author, book.price, book.coverUrl));
    navigate('/');
  } catch (error) {
    navigate('/not-found', { replace: true });
  }
};
