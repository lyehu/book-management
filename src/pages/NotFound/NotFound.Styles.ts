import styled from 'styled-components';
import Button from '../../components/atoms/Button';
import BodyLarge from '../../components/atoms/BodyLarge';

export const Main = styled.main`
  text-align: center;
  margin: 64px auto;
`;

export const Image = styled.img`
  margin-bottom: 32px;
  width: 60%;
`;

export const Paragraph = styled(BodyLarge)`
  margin-bottom: 32px;
`;

export const CenteredButton = styled(Button)`
  margin-left: auto;
  margin-right: auto;
`;
