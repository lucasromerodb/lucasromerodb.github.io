import React from "react";
import styled from "styled-components";
import DefaultText from "../../Text/Text";
import LearnBox from "../../LearnBox/LearnBox";

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

const LearnStage = ({ fields }) => {
  return (
    <>
      <Text size={24} as={fields.title.heading}>
        {fields.title.text}
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
