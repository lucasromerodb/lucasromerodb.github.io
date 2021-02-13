import React from "react";
import styled from "styled-components";
import Text from "../../Text/Text";
import DefaultContainer from "../../Container/Container";

const Container = styled(DefaultContainer)`
  max-width: none;
  display: flex;
  justify-content: center;
  flex-direction: row;

  padding-top: 50px;
  padding-bottom: 50px;

  background-color: var(--white);

  cite {
    font-style: normal;
  }
`;

const Credits = ({ children }) => {
  return (
    <Container hasPadding>
      <Text serif size={16} colorName="blue700" as="cite">
        {children}
      </Text>
    </Container>
  );
};

export default Credits;
