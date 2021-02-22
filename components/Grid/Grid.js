import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;

  justify-items: stretch;
  align-items: stretch;

  width: 100%;
`;

export default Grid;
