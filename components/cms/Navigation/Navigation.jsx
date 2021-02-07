import React from "react";
import styled from "styled-components";
import Text from "../../Text/Text";
import Link from "../../Link/Link";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  margin-top: 30px;
  margin-bottom: 30px;
`;

const RightWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const Picture = styled.picture`
  display: block;
  width: 85px;
  height: 85px;

  border-radius: 45px;
  background: var(--accent);
  margin-right: 32px;

  overflow: hidden;
`;

const Nav = styled.nav`
  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    padding: 0;
    margin: 0;
    margin-top: 15px;

    list-style: none;
  }

  li {
    padding-left: 10px;
    padding-right: 10px;

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      padding-right: 0;
    }
  }
`;

const links = [
  { label: "Development", href: "#development" },
  { label: "3d Art", href: "#3dart" },
  { label: "Gaming", href: "#gaming" },
  { label: "About me", href: "#about" },
  { label: "Twitter", href: "https://twitter.com/lucasromerodb" },
  { label: "GitHub", href: "https://github.com/lucasromerodb" },
];

const Navigation = ({ fields }) => (
  <Wrapper>
    <Picture>
      <source srcSet={fields.picture.fallback} />
      <img src={fields.picture.fallback} alt={fields.picture.alt} />
    </Picture>
    <RightWrapper>
      <Text size={36} weight={600} serif color="blue300" as="p">
        {fields.title}
      </Text>
      <Nav>
        <ul>
          {links.map((item) => (
            <li key={item.label}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </Nav>
    </RightWrapper>
  </Wrapper>
);

export default Navigation;
