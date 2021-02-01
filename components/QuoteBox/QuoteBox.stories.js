import React from "react";
import QuoteBox from "./QuoteBox";
import Container from "../Container/Container";

export default {
  title: "QuoteBox",
  component: QuoteBox,
};

const Template = (args) => (
  <Container hasPadding>
    <QuoteBox {...args}>
      Programming is about setting up your mind with logic and creativity ways
      to identify patterns and solve true problems with code. That's what I do
      every day and I love it.{" "}
      <strong>Let me share some of my experience with you</strong>.
    </QuoteBox>
  </Container>
);

export const QuoteBoxExample = Template.bind({});
QuoteBoxExample.args = {
  href: "https://google.com/",
  linkText: "Click me please!",
};
