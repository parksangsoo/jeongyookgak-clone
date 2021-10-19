import React from "react";
import styled from "styled-components";
import { Container, FlexGrid, Text } from "../elements";
import CartItem from "../components/CartItem";
import Price from "../components/Price";
import NoItem from "../components/NoItem";
import { useSelector } from "react-redux";

// @mida_작업__Cart UI 및 기능__
const Cart = (props) => {
  const cart_list = useSelector((state) => state.cart.cart_list);
  return (
    <>
      <Container padding="140px 0 0 0">
        <Text size="32px" align="center">
          장바구니
        </Text>
        <FlexGrid
          is_flex
          justify="space-between"
          alignItems="left"
          margin="50px 0 0 0"
        >
          {cart_list.length > 0 ? (
            <>
              <FlexGrid width="72%">
                <TableGridWrap borderTop="1px solid #000">
                  <TableGrid width="150px"></TableGrid>
                  <TableGrid flex>상품정보</TableGrid>
                  <TableGrid width="150px">수량</TableGrid>
                  <TableGrid width="120px">가격</TableGrid>
                  <TableGrid width="70px"></TableGrid>
                </TableGridWrap>
                {cart_list.map((item) => {
                  return <CartItem key={item.itemId} {...item} />;
                })}
              </FlexGrid>
              <FlexGrid width="24%">
                <Price />
              </FlexGrid>
            </>
          ) : (
            <NoItem />
          )}
        </FlexGrid>
      </Container>
    </>
  );
};
const TableGridWrap = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.justify ? props.justify : "space-between"};
  align-items: center;
  ${(props) => (props.borderTop ? `border-top:${props.borderTop}` : "0")};
  ${(props) =>
    props.borderBottom ? `border-bottom:${props.borderBottom}` : "0"};
`;
const TableGrid = styled.div`
  width: ${(props) => (props.width ? props.width : "auto")};
  flex: ${(props) => (props.flex ? "1" : "")};
  flex-wrap: wrap;
  padding: ${(props) => (props.padding ? props.padding : "20px")};
  text-align: center;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "13px")};
  font-weight: ${(props) => (props.bold ? props.bold : "400")};
`;

export default Cart;
