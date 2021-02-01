import React from "react";
import Paragraph from "./Paragraph";
import Container from "../Container/Container";

export default {
  title: "Composed/Paragraph",
  component: Paragraph,
};

const Template = (args) => (
  <Container hasPadding>
    <Paragraph {...args}>
      Programming is about setting up your mind with logic and creativity ways to identify patterns
      and solve true problems with code. That's what I do every day and I love it. Let me share some
      of my experience with you.
    </Paragraph>
  </Container>
);

export const ParagraphExample = Template.bind({});
ParagraphExample.args = {
  hasLine: true,
};
