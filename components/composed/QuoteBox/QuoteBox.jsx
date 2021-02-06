import React from "react";
import styled from "styled-components";
import DefaultText from "../../Text/Text";
import Link from "../../Link/Link";

const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 100%;
  height: ${({ height }) => `${height}px` || auto};

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

const QuoteBox = ({ href, linkText, children }) => {
  return (
    <Box>
      <Text colorName="white" lineHeight={1.5} as="p">
        {children}
      </Text>
      <Link href={href}>{linkText}</Link>
    </Box>
  );
};

export default QuoteBox;
