import React from "react";
import styled from "styled-components";
import Pattern from "../Pattern/Pattern";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 450px;

  border-radius: 6px;

  overflow: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  background: var(--blue200);
  mix-blend-mode: multiply;
`;

const AbsolutePattern = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50px;
`;

const Img = styled.img`
  object-fit: cover;
  filter: grayscale(100);
`;

const Cover = ({ fallback, alt = "" }) => {
  return (
    <Wrapper>
      <Img src={fallback} alt={alt} width="100%" height={450} />
      <Overlay />
      <AbsolutePattern>
        <Pattern width={35} height={35} colorName="white" />
      </AbsolutePattern>
    </Wrapper>
  );
};

export default Cover;
