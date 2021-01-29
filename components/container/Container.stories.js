import React from "react";
import Container from "./Container";
import "../../styles/globals.css";

export default {
  title: "Container",
  component: Container,
};

const Template = (args) => (
  <Container {...args} style={{ background: "silver" }}>
    {args.children}
  </Container>
);

export const RegularContainer = Template.bind({});
RegularContainer.args = {
  hasPadding: true,
  children:
    "Combine with Basic Latin to cover most European languages. Contains Latin glyphs within the Unicode range U+00A0 to U+00FF and the euro sign U+20AC. Includes punctuation, some currency symbols, numerals and common accented characters. (97 glyphs)",
};

export const BigContainer = Template.bind({});
BigContainer.args = {
  hasPadding: true,
  maxWidth: 1280,
  children:
    "Combine with Basic Latin to cover most European languages. Contains Latin glyphs within the Unicode range U+00A0 to U+00FF and the euro sign U+20AC. Includes punctuation, some currency symbols, numerals and common accented characters. (97 glyphs)",
};
