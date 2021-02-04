import React from "react";
import styled from "styled-components";
import DefaultText from "../Text/Text";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 20px;
  margin-bottom: 20px;
`;

const Line = styled.div`
  display: block;
  width: 100%;
  height: 1px;
  background-color: var(--blue600);
`;

const Text = styled(DefaultText)`
  width: 200%;
  text-align: center;
`;

export const LearnSeparator = ({ children }) => (
  <Wrapper>
    <Line />
    <Text size={18} as="p" weight={600} colorName="blue600">
      {children}
    </Text>
    <Line />
  </Wrapper>
);

export default LearnSeparator;
