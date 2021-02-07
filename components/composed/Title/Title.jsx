import React from "react";
import styled from "styled-components";
import DefaultText from "../../Text/Text";

const Text = styled(DefaultText)`
  display: block;
  margin-top: 10px;
  max-width: 70%;
`;

const Title = ({ as = "h1", icon, children }) => {
  return (
    <>
      <img
        src={icon.fallback}
        alt={icon.alt}
        width={32}
        height={32}
        aria-hidden="true"
      />
      <Text size={48} serif as={as} lineHeight={1.32}>
        {children}
      </Text>
    </>
  );
};

export default Title;
