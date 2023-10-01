import { useNavigate, useParams } from 'react-router-dom';
import Cover from '../../components/atoms/Cover';
import { useCallback, useContext, useEffect, useState } from 'react';
import { BooksContext } from '../../app/books/service/BooksContext';
import Book from '../../app/books/domain/Book';
import { Container } from '@mui/material';
import { BookBody, Main } from './BookDetail.Styles';
import Button from '../../components/atoms/Button';
import TitleWithSkeleton from '../../components/molecules/TitleWithSkeleton';
import BodyWithSkeleton from '../../components/molecules/BodyWithSkeleton';
import { BodySkeletonSize } from '../../components/molecules/BodyWithSkeleton/BodyWithSkeleton';
import Header from '../../components/atoms/Header';

export default function BookDetailPage() {
  const { id } = useParams();
  const { getBook } = useContext(BooksContext);
  const [book, setBook] = useState<Book | undefined>(undefined);
  const navigate = useNavigate();

  const loadBook = useCallback(
    async (id: string | undefined) => {
      const result = await getBook(id, navigate);
      setBook(result);
    },
    [getBook, navigate],
  );

  useEffect(() => {
    loadBook(id);
  }, [loadBook, id]);

  return (
    <>
      <Cover url={book?.coverUrl} />
      <Main>
        <Container>
          <Header>
            <TitleWithSkeleton title={book?.title} />
            <BodyWithSkeleton size={BodySkeletonSize.XS} text={book && `${book?.price} - ${book?.author}`} />
          </Header>
          <BookBody>
            <BodyWithSkeleton
              size={BodySkeletonSize.L}
              text={
                book &&
                `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.`
              }
            />
          </BookBody>

          <Button fullWidth>Buy</Button>
        </Container>
      </Main>
    </>
  );
}
