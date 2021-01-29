import styled from "styled-components";

const Text = styled.span`
  font-family: var(--${({ serif }) => (serif ? "serif" : "sans")});
  font-size: ${({ size }) => size || 18}px;
  font-weight: ${({ weight }) => weight || 400};
  line-height: ${({ lineHeight }) => lineHeight || 1};
  color: var(--${({ color }) => color || "blue700"});
`;

export default Text;
