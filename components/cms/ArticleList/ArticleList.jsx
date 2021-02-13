import React from "react";
import styled from "styled-components";
import Article from "../../composed/Article/Article";
import Pattern from "../../Pattern/Pattern";

const Wrapper = styled.div`
  position: relative;

  margin-top: 100px;
  margin-bottom: 100px;

  article {
    z-index: 2;
    position: relative;

    margin-bottom: 50px;
  }

  > svg {
    position: absolute;
    z-index: 1;

    left: -44px;
    top: -40px;
  }
`;

const ArticleList = ({ fields }) => {
  return (
    <Wrapper>
      <Pattern width={250} height={640} colorName="blue200" />
      {fields.map((item) => (
        <Article fields={item} />
      ))}
    </Wrapper>
  );
};

export default ArticleList;
