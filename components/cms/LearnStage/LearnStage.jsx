import React from "react";
import styled from "styled-components";
import DefaultText from "../../Text/Text";
import LearnBox from "../../LearnBox/LearnBox";

const fields = {
  title: "1) Start with structures, styles and actions",
  heading: "h3",
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

const Text = styled(DefaultText)`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Ol = styled.ol`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  padding: 0;
  margin: 0;
  list-style: none;
`;

const LearnStage = ({ xxx }) => {
  return (
    <>
      <Text size={24} as={fields.heading}>
        {fields.title}
      </Text>
      <Ol>
        {fields.courses.map((item) => (
          <li key={item.title}>
            <LearnBox {...item} />
          </li>
        ))}
      </Ol>
    </>
  );
};

export default LearnStage;
