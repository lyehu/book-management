import BaseEntity from '../../domain/BaseEntity';

export default class Book extends BaseEntity {
  title?: string = '';
  author?: string = '';
  price?: number = 0;
  coverUrl?: string = '';

  constructor(id: number, title: string, author: string, price: number, cover_url?: string) {
    super(id);

    this.title = title;
    this.author = author;
    this.price = price;
    this.coverUrl = cover_url;
  }

  public isEmpty() {
    if (this.author === '' && this.title === '' && this.price === 0 && this.coverUrl === '') {
      return true;
    }
  }
}
