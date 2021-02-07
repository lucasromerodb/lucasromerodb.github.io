import React from "react";
import LearnStage from "./LearnStage";
import Container from "../../Container/Container";

const fields = {
  title: {
    heading: "h3",
    text: "1) Start with structures, styles and actions",
  },
  courses: [
    {
      href: "https://google.com",
      title: "Styled Components",
      heading: "h1",
      description: "Learn visual primitives for the component age",
      background: "blue700",
      colorTitle: "accent",
      colorDescription: "white",
      hasShadow: false,
    },
    {
      href: "https://google.com",
      title: "Styled Components",
      heading: "h1",
      description: "Learn visual primitives for the component age",
      background: "blue600",
      colorTitle: "accent",
      colorDescription: "white",
      hasShadow: false,
    },
    {
      href: "https://google.com",
      title: "Styled Components",
      heading: "h1",
      description: "Learn visual primitives for the component age",
      background: "white",
      colorTitle: "blue500",
      colorDescription: "blue600",
      hasShadow: true,
    },
  ],
};

export default {
  title: "CMS/LearnStage",
  component: LearnStage,
};

export const LearnStageExample = () => (
  <Container hasPadding>
    <LearnStage fields={fields} />
  </Container>
);
