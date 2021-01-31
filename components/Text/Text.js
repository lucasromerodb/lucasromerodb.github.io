import styled from "styled-components";

const Text = styled.span`
  margin: 0;

  font-family: var(--${({ serif }) => (serif ? "serif" : "sans")});
  font-weight: ${({ weight }) => weight || 400};
  line-height: ${({ lineHeight }) => lineHeight || 1};

  font-size: ${({ size }) => size || 18}px;
  color: var(--${({ colorName }) => colorName || "blue700"});
`;

export default Text;
