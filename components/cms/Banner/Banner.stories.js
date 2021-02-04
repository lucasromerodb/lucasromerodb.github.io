import React from "react";
import Banner from "./Banner";
import Container from "../../Container/Container";

export default {
  title: "CMS/Banner",
  component: Banner,
};

export const BannerExample = () => (
  <Container>
    <Banner>
      Let’s talk about software development, 3D Art & video games.
    </Banner>
  </Container>
);
