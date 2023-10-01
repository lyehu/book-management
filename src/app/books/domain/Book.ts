import BaseEntity from '../../domain/BaseEntity';
import Books from './../../../assets/books.png';
import Author from './Author/Author';
import Cover from './Cover/Cover';
import Price from './Price/Price';
import Title from './Title/Title';

export default class Book extends BaseEntity {
  title: Title;
  author: Author;
  price: Price;
  coverUrl: Cover;

  constructor(id: number, title: string, author: string, price: string, cover_url: string = Books) {
    super(id);

    this.title = new Title(title);
    this.author = new Author(author);
    this.price = new Price(price);
    this.coverUrl = new Cover(cover_url);
  }
}
