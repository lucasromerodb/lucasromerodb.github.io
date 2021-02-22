import React from "react";
import styled from "styled-components";
import Text from "../../Text/Text";
import DefaultLink from "../../Link/Link";

const Box = styled.div`
  display: flex;
  flex-direction: row;

  padding: 40px;
  margin-top: 20px;

  background-color: var(--white);
  border-radius: 6px;
`;

const Title = styled(Text)`
  margin-bottom: 20px;
`;

const Link = styled(DefaultLink)`
  color: var(--blue500);
`;

const Wrapper = styled.div`
  color: red;
`;

const Img = styled.img`
  width: 125px;
  height: 125px;

  background-image: red;

  margin-left: 100px;
  border-radius: 20px;
`;

const ProductBanner = ({ fields }) => {
  return (
    <Box>
      <Wrapper>
        <Title as="h3" size={24} serif weight={600}>
          {fields.title}
        </Title>
        <Text as="p" size={18} lineHeight={1.5}>
          {fields.text}{" "}
          <Link href="https://open.spotify.com/show/7I8KVqoCbdsVmPJ3VVIGqT">
            I recommend you listen Arroba Channel on Spotify
          </Link>
          .
        </Text>
      </Wrapper>

      <Img src={fields.picture.fallback} alt="Arroba Channel" />
    </Box>
  );
};

export default ProductBanner;
