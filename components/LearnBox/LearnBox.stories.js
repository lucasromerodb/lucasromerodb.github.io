import React from "react";
import LearnBox from "./LearnBox";
import Container from "../Container/Container";

export default {
  title: "Components/LearnBox",
  component: LearnBox,
};

const Template = (args) => (
  <Container hasPadding maxWidth={400}>
    <LearnBox {...args} />
  </Container>
);

export const LearnBoxDark = Template.bind({});
LearnBoxDark.args = {
  href: "https://google.com",
  title: "Styled Components",
  titleTag: "h1",
  description: "Learn visual primitives for the component age",
  background: "blue700",
  colorTitle: "accent",
  colorDescription: "white",
};

export const LearnBoxRegular = Template.bind({});
LearnBoxRegular.args = {
  href: "https://google.com",
  title: "Styled Components",
  titleTag: "h1",
  description: "Learn visual primitives for the component age",
  background: "blue600",
  colorTitle: "accent",
  colorDescription: "white",
};

export const LearnBoxLight = Template.bind({});
LearnBoxLight.args = {
  href: "https://google.com",
  title: "Styled Components",
  titleTag: "h1",
  description: "Learn visual primitives for the component age",
  background: "white",
  colorTitle: "blue500",
  colorDescription: "blue600",
  hasShadow: true,
};
