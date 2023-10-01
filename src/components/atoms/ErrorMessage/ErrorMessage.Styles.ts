import styled from 'styled-components';
import BodyExtraSmall from '../BodyExtraSmall';

export const ErrorMessage = styled(BodyExtraSmall)`
  color: ${(props) => props.theme.palette.error.main};
`;
