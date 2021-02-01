import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth || 900}px;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${({ hasPadding }) => (hasPadding ? 20 : 0)}px;
  padding-right: ${({ hasPadding }) => (hasPadding ? 20 : 0)}px;
`;

export default Container;
