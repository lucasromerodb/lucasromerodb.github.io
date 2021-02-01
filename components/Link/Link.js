import React from "react";
import styled from "styled-components";

const Link = styled.a`
  text-decoration: underline;
  font-weight: ${({ weight }) => weight || 400};
  color: var(--${({ colorName }) => colorName || "inherite"});
`;

export default Link;
