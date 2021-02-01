import React from "react";
import Title from "./Title";
import Container from "../Container/Container";

export default {
  title: "Composed/Title",
  component: Title,
};

const Template = (args) => (
  <Container>
    <Title {...args}>Sometimes I write about software development</Title>
  </Container>
);

export const TitleExample = Template.bind({});
TitleExample.args = {
  as: "h1",
  imageSrc:
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/microsoft/209/books_1f4da.png",
  imageAlt: "This is the best title icon",
};
