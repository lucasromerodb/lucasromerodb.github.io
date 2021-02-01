import React from "react";
import styled from "styled-components";
import DefaultText from "../Text/Text";
import Link from "../Link/Link";

const Box = styled.div`
  padding: 32px;

  background-color: var(--blue500);
  border-radius: 6px;

  color: var(--white);

  &::before {
    content: '"';
    display: block;

    font-family: "Work Sans", sans-serif;
    font-size: 60px;
  }
`;

const Text = styled(DefaultText)`
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
