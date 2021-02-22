import React from "react";
import QuoteBox from "./QuoteBox";
import Container from "../../Container/Container";

export default {
  title: "Composed/QuoteBox",
  component: QuoteBox,
};

const Template = (args) => (
  <Container hasPadding>
    <QuoteBox fields={args}>
      Video games are part of my culture, I really enjoy playing new, retro and
      indie games. Playing it with friends makes me happy, that's why{" "}
      <strong>I want sharing my passion with you</strong>.
    </QuoteBox>
  </Container>
);

export const QuoteBoxExample = Template.bind({});
QuoteBoxExample.args = {
  text: "",
  link: {
    href: "https://google.com/",
    text: "Follow my gaming account on Instagram and let’s play",
  },
};
