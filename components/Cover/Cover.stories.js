import React from "react";
import Cover from "./Cover";
import Container from "../Container/Container";

export default {
  title: "Components/Cover",
  component: Cover,
};

const Template = (args) => (
  <Container hasPadding maxWidth={1280}>
    <Cover {...args} />
  </Container>
);

export const CoverExample = Template.bind({});
CoverExample.args = {
  fallback: "https://wallpaperaccess.com/full/370969.jpg",
  alt: "Ghibli field",
};
