import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth || 900}px;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${({ hasPadding }) => (hasPadding ? 20 : 0)}px;
  padding-right: ${({ hasPadding }) => (hasPadding ? 20 : 0)}px;
`;

const Container = ({ children }) => <Box>{children}</Box>;

export default Container;
