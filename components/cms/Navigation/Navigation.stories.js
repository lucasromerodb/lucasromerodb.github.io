import React from "react";
import Navigation from "./Navigation";
import photo from "../../../public/images/luke.png";

const fields = {
  title: "Hey there, I'm Luke 👋",
  picture: {
    fallback: photo,
    alt: "Lucas Romero Di Benedetto",
  },
  links: [
    { label: "Development", href: "#development" },
    { label: "3d Art", href: "#3dart" },
    { label: "Gaming", href: "#gaming" },
    { label: "About me", href: "#about" },
    { label: "Twitter", href: "https://twitter.com/lucasromerodb" },
    { label: "GitHub", href: "https://github.com/lucasromerodb" },
  ],
};

export default {
  title: "CMS/Navigation",
  component: Navigation,
};

export const NavigationExample = () => <Navigation fields={fields} />;
