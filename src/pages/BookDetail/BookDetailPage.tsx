import { useParams } from 'react-router-dom';
import Cover from '../../components/atoms/Cover';
import { useCallback, useContext, useEffect, useState } from 'react';
import { BooksContext } from '../../app/books/service/BooksContext';
import Book from '../../app/books/domain/Book';
import Title from '../../components/atoms/Title';

export default function BookDetailPage() {
  const { id } = useParams();
  const { getBook } = useContext(BooksContext);
  const [book, setBook] = useState<Book | undefined>(undefined);

  const loadBook = useCallback(
    async (id: string | undefined) => {
      const result = await getBook(id);
      setBook(result);
    },
    [getBook],
  );

  useEffect(() => {
    loadBook(id);
  }, [loadBook, id]);

  return (
    <>
      <Cover coverUrl={book?.coverUrl} />
      <div>
        <Title>{book?.title}</Title>
      </div>
    </>
  );
}
