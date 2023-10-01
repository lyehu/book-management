import styled from 'styled-components';
import fontSizes from '../../../styles/theme/fontSizes';

export const InputText = styled.input`
  width: 100%;
  border: unset;
  height: 40px;
  padding: 0 12px;
  border-radius: 8px;
  font-size: ${fontSizes.xs}px;
  color: ${(props) => props.theme.palette.grey['800']};
  transition: none !important;
  background-color: ${(props) => props.theme.palette.grey['100']};
  outline: unset;
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.palette.grey.grey3};

  &:focus {
    border-color: ${(props) => props.theme.palette.primary.main};
  }

  &::placeholder {
    color: ${(props) => props.theme.palette.grey.grey2};
  }

  &:disabled {
    background-color: ${(props) => props.theme.palette.grey.grey4};

    &:hover {
      cursor: not-allowed;
    }

    &::placeholder {
      color: ${(props) => props.theme.palette.grey.grey2};
    }
  }
`;
