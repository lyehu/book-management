import { Container } from '@mui/material';
import Title from '../../components/atoms/Title';
import { CenteredButton, Image, Main, Paragraph } from './NotFound.Styles';
import ErrorImage from '../../assets/404.png';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/');
  };

  return (
    <Main>
      <Container>
        <Image src={ErrorImage} alt="" />
        <Title>Ops, something has gone wrong</Title>
        <Paragraph>The page you're looking for doesn't seem to exist, looking for some books?</Paragraph>
        <CenteredButton onClick={onClick}>See all books</CenteredButton>
      </Container>
    </Main>
  );
}
