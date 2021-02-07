import React from "react";
import styled from "styled-components";
import Text from "../Text/Text";

const Box = styled.div`
  padding: 25px;
  border-radius: 6px;
  background-color: var(--${({ background }) => background || "white"});
  box-shadow: ${({ hasShadow }) =>
    hasShadow ? "0 5px 5px rgba(0, 110, 247, 0.15)" : "none"};
`;

const Title = styled(Text)`
  display: block;
  margin-bottom: 25px;
`;

const Description = styled(Text)`
  display: block;
`;

const LearnBox = ({
  href,
  title,
  heading,
  description,
  background,
  colorTitle,
  colorDescription,
  hasShadow = false,
}) => {
  return (
    <a href={href}>
      <Box background={background} hasShadow={hasShadow}>
        <Title size={20} colorName={colorTitle} as={heading} weight={600}>
          {title}
        </Title>
        <Description
          size={16}
          lineHeight={1.18}
          colorName={colorDescription}
          as="p"
        >
          {description}
        </Description>
      </Box>
    </a>
  );
};

export default LearnBox;
