import { ReactNode, createContext } from 'react';
import { findBooks, findBooksParams } from './../infrastructure/findBooks';
import { getBook } from './bookService';
import Book from '../domain/Book';

export type BookContextType = {
  findBooks: (params: findBooksParams) => Promise<{ data: Book[]; error: unknown }>;
  getBook: (id: string) => Promise<Book>;
};

const value = { findBooks, getBook };

export const BooksContext = createContext(value);

export const BookProvider = ({ children }: { children: ReactNode }) => (
  <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
);
