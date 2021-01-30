import React from "react";
import Text from "./Text";
// import "../../styles/globals.css";

export default {
  title: "Text",
  component: Text,
};

const Template = (args) => <Text {...args}>{args.label}</Text>;

export const TextTitle = Template.bind({});
TextTitle.args = {
  size: 48,
  weight: 400,
  serif: true,
  lineHeight: 1,
  colorName: "blue700",
  label: "Let’s talk about software development, 3D Art & video games.",
};

export const TextParagraph = Template.bind({});
TextParagraph.args = {
  size: 20,
  weight: 400,
  serif: true,
  lineHeight: 1.9,
  colorName: "blue700",
  label:
    "Programming is about setting up your mind with logic and creativity ways to identify patterns and solve true problems with code. That's what I do every day and I love it. Let me share some of my experience with you.",
};
