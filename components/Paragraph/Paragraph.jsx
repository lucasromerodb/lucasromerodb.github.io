import React from "react";
import styled from "styled-components";
import Text from "../Text/Text";

const Line = styled.div`
  display: block;
  width: 70px;
  height: 8px;

  margin-bottom: 30px;

  background: var(--accent);
`;

const Paragraph = ({ hasLine = true, children }) => {
  return (
    <>
      {hasLine && <Line />}
      <Text size={20} lineHeight={1.9} as="p">
        {children}
      </Text>
    </>
  );
};

export default Paragraph;
