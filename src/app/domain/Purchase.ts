import BaseEntity from './BaseEntity';
import User from './User';
import Book from '../books/domain/Book';

export default class Purchase extends BaseEntity {
  user?: User;
  books: Book[] = [];
}
