import React from "react";
import Grid from "./Grid";
import Container from "../Container/Container";
import LearnBox from "../LearnBox/LearnBox";

export default {
  title: "Components/Grid",
  component: Grid,
};

const imageURL = "https://github.com/lucasromerodb/ghibli-wind-example/raw/main/render.png";

const styles = {
  background: "silver",
  width: "100%",
  height: "100px",
  objectFit: "cover",
  borderRadius: "6px",
  justifySelf: "stretch",
  alignSelf: "stretch",
};

const Template = (args) => (
  <Container hasPadding>
    <Grid>
      <img
        src={imageURL}
        style={{
          ...styles,
          height: "566px",
          gridColumn: "1 / 9",
        }}
      />
      <img
        src={imageURL}
        style={{
          ...styles,
          height: "566px",
          gridColumn: "9 / 13",
        }}
      />
      <img src={imageURL} style={{ ...styles, height: "330px", gridColumn: "1 / 5" }} />
      <img src={imageURL} style={{ ...styles, height: "330px", gridColumn: "5 / 13" }} />
      <img src={imageURL} style={{ ...styles, height: "300px", gridColumn: "1 / 13" }} />
      <img src={imageURL} style={{ ...styles, height: "420px", gridColumn: "1 / 7" }} />
      <img src={imageURL} style={{ ...styles, height: "420px", gridColumn: "7 / 13" }} />
    </Grid>
  </Container>
);

export const GridExample = Template.bind({});
GridExample.args = {};
