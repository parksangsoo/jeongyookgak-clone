import React from "react";
import styled from "styled-components";
import { FlexGrid, Image, Text } from "../elements";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// @mida_작업 // Card UI 및 기능
const Card = (props) => {
  const { src, title, text } = props;
  return (
    <>
      <ItemBox>
        <Image type="default" src={src} />
        <Cart>
          <ShoppingCartIcon style={{ fontSize: "1.8rem" }} />
        </Cart>
      </ItemBox>
      <FlexGrid margin="15px 0 0 0">
        <Text size="18px" bold>
          {title}
        </Text>
        <Text size="16px" color="#9b9b9b" margin="6px 0 0 0">
          {text}
        </Text>
      </FlexGrid>
    </>
  );
};

const ItemBox = styled.div`
  position: relative;
  padding: 30px;
  background-color: #f9f7f8;
`;
const Cart = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
  width: 68px;
  height: 68px;
  padding: 20px;
  border-radius: 50%;
  box-shadow: 3px 3px 3px #eee;
  background-color: #fff;
  &:hover {
    background-color: #343a40;
    cursor: pointer;
    * {
      color: #fff;
    }
  }
`;
export default Card;
