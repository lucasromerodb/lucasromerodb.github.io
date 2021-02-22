import React from "react";
import LearnSeparator from "./LearnSeparator";
import Container from "../Container/Container";

export default {
  title: "Components/LearnSeparator",
  component: LearnSeparator,
};

export const LearnSeparatorExample = () => (
  <Container hasPadding>
    <LearnSeparator>You could be employable at six months!</LearnSeparator>
  </Container>
);
