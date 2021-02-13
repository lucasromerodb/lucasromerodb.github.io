import React from "react";
import styled from "styled-components";
import DefaultContainer from "../../Container/Container";
import DefaultText from "../../Text/Text";

const Wrapper = styled.article`
  display: flex;
  flex-direction: row;

  > div {
    display: flex;
    flex-direction: column;

    padding-top: 10px;
    padding-bottom: 10px;
  }

  img {
    object-fit: cover;
    margin-right: 60px;
    border-radius: 6px;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const Title = styled(DefaultText)`
  height: 100%;
`;
const Paragraph = styled(DefaultText)``;

const Article = ({ fields }) => {
  return (
    <Wrapper hasPadding>
      <img
        src={fields.image.fallback}
        alt={fields.image.alt}
        loading="lazy"
        height={150}
        width={400}
      />
      <div>
        <Title as={fields.heading} size={26} lineHeight={1.15} colorName="blue600">
          <a href={fields.href}>{fields.title}</a>
        </Title>
        <Paragraph as="p" size={18} colorName="gray300">
          {fields.date} - Written in {fields.lang}
        </Paragraph>
      </div>
    </Wrapper>
  );
};

export default Article;
