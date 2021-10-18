import React from "react";
import styled from "styled-components";
import { Container, Text } from "../elements";

const Header = () => {
  return (
    <>
      <HeaderBg>
        <Container>
          <Text color="#fff">Header</Text>
        </Container>
      </HeaderBg>
    </>
  );
};

const HeaderBg = styled.div`
  width: 100%;
  height: 96px;
  color: #fff;
  background-color: #000;
`;

export default Header;
