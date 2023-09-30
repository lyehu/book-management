import Book from '../app/books/domain/Book';
import data from './../app/books/database.json';

export const booksFixture = data.books.map(eachBook => new Book(eachBook.id, eachBook.title, eachBook.author, eachBook.price, eachBook.cover_url))