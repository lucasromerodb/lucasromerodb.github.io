import React from "react";
import styled from "styled-components";
import DefaultText from "../../Text/Text";
import Link from "../../Link/Link";

const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 100%;
  height: auto;

  height: 450px;
  grid-column: 8 / 13;

  padding: 32px;
  padding-top: 80px;

  background-color: var(--blue500);
  border-radius: 6px;

  color: var(--white);

  &::before {
    content: "“";
    display: block;

    position: absolute;
    top: 10px;

    font-family: "Work Sans";
    font-size: 90px;
    color: var(--blue300);
  }
`;

const Text = styled(DefaultText)`
  height: 100%;
  margin-bottom: 32px;
`;

const QuoteBox = ({ fields, styles = {}, children }) => {
  return (
    <Box styles={styles}>
      <Text colorName="white" lineHeight={1.5} as="p">
        {fields.text} {children}
      </Text>
      <Link href={fields.link.href}>{fields.link.text}</Link>
    </Box>
  );
};

export default QuoteBox;
