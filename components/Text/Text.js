import styled from "styled-components";

const Text = styled.span`
  margin: 0;

  font-family: ${({ serif }) => (serif ? "Playfair Display" : "Work Sans")};
  font-weight: ${({ weight }) => weight || 400};
  line-height: ${({ lineHeight }) => lineHeight || 1};

  font-size: ${({ size }) => size || 18}px;
  color: var(--${({ colorName }) => colorName || "blue700"});
`;

export default Text;
