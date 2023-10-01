import { ReactNode, createContext } from 'react';
import { findBooks, findBooksParams } from './../infrastructure/findBooks';
import { getBook } from './bookService';
import Book from '../domain/Book';
import { NavigateFunction } from 'react-router-dom';
import { ErrorCode } from '../../../utils/errors';

export type BookContextType = {
  findBooks: (params: findBooksParams) => Promise<
    | {
        error: {
          code: ErrorCode;
        };
        data?: undefined;
      }
    | {
        data: Book[];
        error?: undefined;
      }
  >;
  getBook: (id: string | undefined, navigate: NavigateFunction) => Promise<Book | undefined>;
};

const value = { findBooks, getBook };

export const BooksContext = createContext<BookContextType>(value);

export const BookProvider = ({ children }: { children: ReactNode }) => {
  return <BooksContext.Provider value={value}>{children}</BooksContext.Provider>;
};
