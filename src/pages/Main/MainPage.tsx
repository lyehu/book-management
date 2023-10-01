import { useCallback, useContext, useEffect, useState } from 'react';

import Title from '../../components/atoms/Title';
import Book from '../../app/books/domain/Book';
import { BooksContext } from '../../app/books/service/BooksContext';
import Header from '../../components/atoms/Header';
import Thumbnail from '../../components/atoms/Thumbnail';
import ThumbnailList from '../../components/molecules/ThumbnailList';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from '@mui/material';
import Button from '../../components/atoms/Button';
import { ButtonContainer } from './MainPage.Styles';

export default function MainPage() {
  const navigate = useNavigate();
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

  const navigateToNewBook = () => {
    navigate('/new-book');
  };

  return (
    <Container>
      <Header>
        <Title>Books list</Title>
      </Header>
      <ThumbnailList>
        {books?.map((eachBook: Book) => {
          return (
            <Link to={`/books/${eachBook.id}`} key={eachBook.id}>
              <Thumbnail src={eachBook.coverUrl.value} alt={`${eachBook.title.value} details page`} />
            </Link>
          );
        })}
      </ThumbnailList>
      <ButtonContainer>
        <Button onClick={navigateToNewBook}>Add book</Button>
      </ButtonContainer>
    </Container>
  );
}
