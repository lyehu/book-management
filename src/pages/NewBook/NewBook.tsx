import { Container, FormControl, FormLabel } from '@mui/material';
import Title from '../../components/atoms/Title';
import Header from '../../components/atoms/Header';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import InputText from '../../components/atoms/InputText';
import Button from '../../components/atoms/Button';
import { ButtonContainer } from './NewBook.Styles';

type IFormInput = {
  title: string;
  author: string;
  price: string;
  coverUrl: string;
};

export default function NewBook() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      title: '',
      author: '',
      price: '',
      coverUrl: '',
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <Header>
        <Title>Add new book details</Title>
      </Header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl fullWidth required margin="dense">
          <FormLabel htmlFor="title">Title</FormLabel>
          <Controller
            name="title"
            control={control}
            render={({ field }) => <InputText {...field} id="title" />}
          ></Controller>
        </FormControl>
        <FormControl fullWidth required margin="dense">
          <FormLabel htmlFor="author">Author</FormLabel>
          <Controller
            name="author"
            control={control}
            render={({ field }) => <InputText {...field} id="author" />}
          ></Controller>
        </FormControl>
        <FormControl required margin="dense">
          <FormLabel htmlFor="price">Price</FormLabel>
          <Controller
            name="price"
            control={control}
            render={({ field }) => <InputText {...field} id="price" />}
          ></Controller>
        </FormControl>
        <FormControl fullWidth required margin="dense">
          <FormLabel htmlFor="coverUrl">Cover</FormLabel>
          <Controller
            name="coverUrl"
            control={control}
            render={({ field }) => <InputText {...field} id="coverUrl" />}
          ></Controller>
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
