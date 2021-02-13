import React from "react";
import Container from "../../Container/Container";
import Article from "./Article";

export default {
  title: "Composed/Article",
  component: Article,
};

const Template = (args) => (
  <Container hasPadding>
    <Article fields={args} />
  </Container>
);

export const ArticleDefault = Template.bind();
ArticleDefault.args = {
  heading: "h3",
  href:
    "https://dev.to/lucasromerodb/te-voy-a-recomendar-una-forma-practica-de-documentar-tu-proyecto-de-software-37f3",
  image: {
    fallback:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--s5AlSHbO--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/tlmlixcnbs3h2u712bjt.jpg",
    alt: "Description",
  },
  title: "A practice way to document your software development project",
  date: "July 2020",
  lang: "Spanish",
};
