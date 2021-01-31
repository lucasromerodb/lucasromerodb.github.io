import React from "react";
import styled from "styled-components";
import DefaultText from "../Text/Text";

const Text = styled(DefaultText)`
  display: block;
  margin-top: 20px;
  max-width: 70%;
`;

const Title = ({ as = "h1", imageSrc, imageAlt = "Title icon", children }) => {
  return (
    <>
      <img
        src={imageSrc}
        alt={imageAlt}
        width={32}
        height={32}
        aria-hidden="true"
      />
      <Text size={48} serif as={as}>
        {children}
      </Text>
    </>
  );
};

export default Title;
