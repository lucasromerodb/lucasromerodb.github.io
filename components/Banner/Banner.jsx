import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Text from "../Text/Text";
import Pattern from "../Pattern/Pattern";

const Wrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;
`;

const Box = styled.div`
  padding: 40px 50px;
  margin-right: 30px;

  background-color: var(--blue200);
`;

const Banner = ({ children }) => {
  const boxRef = useRef();
  const [patternHeight, setPatternHeight] = useState(0);

  useEffect(() => {
    const height = boxRef.current.getClientRects()[0].height;
    setPatternHeight(height);
  }, [useRef]);

  return (
    <Wrapper>
      <Box ref={boxRef}>
        <Text size={48} weight={300} serif={false} colorName="blue600">
          {children}
        </Text>
      </Box>
      <Pattern width={240} height={patternHeight} />
    </Wrapper>
  );
};

export default Banner;
