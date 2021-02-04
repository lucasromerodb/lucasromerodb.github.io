import React from "react";
import styled from "styled-components";
import Text from "../../Text/Text";
import DefaultContainer from "../../Container/Container";

const Container = styled(DefaultContainer)`
  max-width: none;
  display: flex;
  justify-content: center;
  flex-direction: row;

  padding-top: 20px;
  padding-bottom: 20px;

  background-color: var(--white);
`;

const Credits = ({ children }) => {
  return (
    <Container hasPadding>
      <Text serif size={16} colorName="blue700" as="cite">
        {children} 💖
      </Text>
    </Container>
  );
};

export default Credits;
