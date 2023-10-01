import { Container, FormControl, FormLabel } from '@mui/material';
import Title from '../../components/atoms/Title';
import Header from '../../components/atoms/Header';
import { SubmitHandler, useForm } from 'react-hook-form';
import InputText from '../../components/atoms/InputText';
import Button from '../../components/atoms/Button';
import { ButtonContainer } from './NewBook.Styles';
import { TITLE_REGEX } from '../../app/books/domain/Title/Title';
import { AUTHOR_REGEX } from '../../app/books/domain/Author/Author';
import { PRICE_REGEX } from '../../app/books/domain/Price/Price';
import { COVER_REGEX } from '../../app/books/domain/Cover/Cover';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import ErrorMessage from '../../components/atoms/ErrorMessage';

const formSchema = yup.object({
  title: yup
    .string()
    .required('A title is needed to create a book')
    .matches(TITLE_REGEX, 'Please review the title field'),
  author: yup
    .string()
    .required('An author is needed to create a book')
    .matches(AUTHOR_REGEX, 'Please review the author field'),
  price: yup
    .string()
    .required('A price is needed to create a book')
    .matches(PRICE_REGEX, 'Please review the price field'),
  coverUrl: yup.string().matches(COVER_REGEX, 'Please provide a valid image url'),
});

type IFormInput = {
  title: string;
  author: string;
  price: string;
  coverUrl?: string;
};

export default function NewBook() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(formSchema),
    defaultValues: {
      title: '',
      author: '',
      price: '',
      coverUrl: '',
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = () => {
    console.log(getValues(), getValues);
  };

  return (
    <Container>
      <Header>
        <Title>Add new book details</Title>
      </Header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl fullWidth required margin="dense">
          <FormLabel htmlFor="title">Title</FormLabel>

          <InputText {...register('title')} />
          <ErrorMessage>{errors.title?.message}</ErrorMessage>
        </FormControl>
        <FormControl fullWidth required margin="dense">
          <FormLabel htmlFor="author">Author</FormLabel>
          <InputText {...register('author')} />
          <ErrorMessage>{errors.author?.message}</ErrorMessage>
        </FormControl>
        <FormControl required margin="dense">
          <FormLabel htmlFor="price">Price</FormLabel>
          <InputText {...register('price')} />
          <ErrorMessage>{errors.price?.message}</ErrorMessage>
        </FormControl>
        <FormControl fullWidth margin="dense">
          <FormLabel htmlFor="coverUrl">Cover</FormLabel>
          <InputText {...register('coverUrl')} />
          <ErrorMessage>{errors.coverUrl?.message}</ErrorMessage>
        </FormControl>

        <ButtonContainer>
          <Button type="submit" fullWidth>
            Add
          </Button>
        </ButtonContainer>
      </form>
    </Container>
  );
}
