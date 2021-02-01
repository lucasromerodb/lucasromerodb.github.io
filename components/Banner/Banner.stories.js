import React from "react";
import Banner from "./Banner";
import Container from "../Container/Container";

export default {
  title: "Composed/Banner",
  component: Banner,
};

export const Template = () => (
  <Container>
    <Banner>Let’s talk about software development, 3D Art & video games.</Banner>
  </Container>
);
