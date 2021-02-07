import React from "react";
import styled from "styled-components";
import Grid from "../../Grid/Grid";

const Picture = styled.picture`
  img {
    width: 100%;
    object-fit: cover;
    border-radius: 6px;
    justify-self: stretch;
    align-self: stretch;
  }
`;

export const IMG = ({ fields }) => (
  <Picture
    style={{
      height: fields.height,
      gridColumn: fields.gridColumn,
    }}
  >
    <img
      src={fields.fallback}
      alt={fields.alt}
      style={{
        height: fields.height,
      }}
    />
  </Picture>
);

const ImageWall = ({ fields }) => {
  return (
    <Grid>
      {fields.map((el) => (
        <IMG key={el.fallback} fields={el} />
      ))}
    </Grid>
  );
};

export default ImageWall;
