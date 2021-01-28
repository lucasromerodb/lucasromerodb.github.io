import styled from "styled-components";

const Title = styled.span`
  font-size: 18px;
  text-align: ${({ align }) => (align ? align : "left")};
`;
