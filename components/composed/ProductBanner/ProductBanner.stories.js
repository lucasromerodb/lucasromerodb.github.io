import React from "react";
import ProductBanner from "./ProductBanner";
import Container from "../../Container/Container";
import image from "../../../public/images/arrobachannel.jpg";

const fields = {
  title: "Videogame podcast",
  text:
    "I’m member of Arroba Channel Podcast, a podcast where we speak about  video games and technology, If you speak spanish like me,",
  picture: {
    fallback: image,
    alt: "Arroba Channel",
  },
};

export default {
  title: "Composed/ProductBanner",
  component: ProductBanner,
};

export const ProductBannerExample = () => (
  <Container hasPadding>
    <ProductBanner fields={fields} />
  </Container>
);
