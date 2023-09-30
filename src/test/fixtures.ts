import Book from '../app/domain/Book';
import data from './../app/application/api/database.json';

export const booksFixture = data.books.map(eachBook => new Book(eachBook.id, eachBook.title, eachBook.author, eachBook.price, eachBook.cover_url))