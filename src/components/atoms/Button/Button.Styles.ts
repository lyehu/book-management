import styled from 'styled-components';

const Button = styled.button<{ fluid?: boolean }>`
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  width: ${(props) => (props.fluid ? '100%' : 'fit-content')};
  min-width: 80px;
  height: 40px;
  gap: 8px;
  box-sizing: border-box;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: unset;
  border-radius: 8px;
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.palette.primary.main} 50%,
    ${(props) => props.theme.palette.secondary.main} 100%
  );

  &:hover {
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
    }
  }
`;

export default Button;
