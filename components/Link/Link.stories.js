import React from "react";
import Link from "./Link";
import Text from "../Text/Text";

export default {
  title: "Components/Link",
  component: Link,
};

const Template = (args) => (
  <Text serif={false} as="p">
    I’m member of Arroba Channel Podcast, a podcast where we speak about video games and technology,
    If you speak spanish like me, I recommend you{" "}
    <Link {...args} href="http://google.com">
      listen it on Spotify.
    </Link>
  </Text>
);

export const LinkExample = Template.bind({});
LinkExample.args = {
  colorName: "blue500",
  weight: 400,
};
