import styled from 'styled-components';

const Cover = styled.div<{ coverUrl: string | undefined }>`
  background-image: url(${(props) => props.coverUrl});
  background-repeat: no-repeat;
  background-size: cover;
  height: 55vh;
  width: 100%;
`;

export default Cover;
