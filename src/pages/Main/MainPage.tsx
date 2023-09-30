import { useContext, useEffect, useState } from 'react';

import Title from '../../components/Title';
import Book from '../../app/domain/Book';
import BooksContext from '../../context/BooksContext';
import Header from '../../components/Header';
import Thumbnail from '../../components/Thumbnail';
import ThumbnailList from '../../components/ThumbnailList';

export default function MainPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const booksContext = useContext(BooksContext) as Record<string, () => Promise<{ data: Book[]; error: unknown }>>;

  useEffect(() => {
    (async () => {
      const { data, error } = await booksContext.findBooks();
      if (error) {
        return;
      }

      setBooks(data);
    })();
  }, [booksContext]);

  return (
    <>
      <Title>Books list</Title>

      <ThumbnailList>
        {books?.map((eachBook: Book) => {
          return (
            <div key={eachBook.id}>
              <Thumbnail src={eachBook.coverUrl} alt={eachBook.title} />

              <Header>{eachBook.title}</Header>
            </div>
          );
        })}
      </ThumbnailList>
    </>
  );
}
