import React from "react";
import styled from "styled-components";
import Text from "../../Text/Text";

const Line = styled.div`
  display: block;
  width: 70px;
  height: 8px;

  margin-top: 50px;
  margin-bottom: 20px;

  background: var(--accent);
`;

const Paragraph = ({ hasLine = true, children }) => {
  return (
    <>
      {hasLine && <Line />}
      <Text size={20} lineHeight={1.9} as="p" style={{ marginBottom: "50px" }}>
        {children}
      </Text>
    </>
  );
};

export default Paragraph;
