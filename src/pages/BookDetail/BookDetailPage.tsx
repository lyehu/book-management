import { useParams } from 'react-router-dom';
import Cover from '../../components/atoms/Cover';
import { useCallback, useContext, useEffect, useState } from 'react';
import { BooksContext } from '../../app/books/service/BooksContext';
import Book from '../../app/books/domain/Book';
import Title from '../../components/atoms/Title';
import { Container } from '@mui/material';
import { BookBody, BookHeader, Main } from './BookDetail.Styles';
import BodyLarge from '../../components/atoms/BodyLarge';
import Button from '../../components/atoms/Button';

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
      <Main>
        <Container>
          <BookHeader>
            <Title>{book?.title}</Title>
            <BodyLarge>
              {book?.price} - {book?.author}
            </BodyLarge>
          </BookHeader>
          <BookBody>
            <BodyLarge>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </BodyLarge>
          </BookBody>

          <Button fluid>Buy</Button>
        </Container>
      </Main>
    </>
  );
}
