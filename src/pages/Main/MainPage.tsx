import { useCallback, useContext, useEffect, useState } from 'react';

import Title from '../../components/atoms/Title';
import Book from '../../app/books/domain/Book';
import { BooksContext } from '../../app/books/service/BooksContext';
import Header from '../../components/atoms/Header';
import Thumbnail from '../../components/atoms/Thumbnail';
import ThumbnailList from '../../components/molecules/ThumbnailList';
import { Link } from 'react-router-dom';

export default function MainPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const booksContext = useContext(BooksContext);

  const loadBooks = useCallback(async () => {
    const { data, error } = await booksContext.findBooks({});
    if (error) {
      return;
    }

    setBooks(data);
  }, [setBooks, booksContext]);

  useEffect(() => {
    loadBooks();
  }, [loadBooks]);

  return (
    <>
      <Title>Books list</Title>

      <ThumbnailList>
        {books?.map((eachBook: Book) => {
          return (
            <Link to={`/books/${eachBook.id}`} key={eachBook.id}>
              <Thumbnail src={eachBook.coverUrl} alt={`${eachBook.title} details page`} />

              <Header>{eachBook.title}</Header>
            </Link>
          );
        })}
      </ThumbnailList>
    </>
  );
}
