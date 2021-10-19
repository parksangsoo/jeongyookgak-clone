import React from "react";
import styled from "styled-components";
import { Container, FlexGrid, Text, Button } from "../elements";
import CartItem from "../components/CartItem";

// @mida_작업__Cart UI 및 기능__
const Cart = (props) => {
  return (
    <>
      <Container padding="200px 0 0 0">
        <Text size="32px" align="center">
          장바구니
        </Text>
        <FlexGrid
          is_flex
          justify="space-between"
          alignItems="left"
          margin="50px 0 0 0"
        >
          <FlexGrid width="72%">
            <CartItem />
          </FlexGrid>
          <FlexGrid width="24%">
            <BorderGrid padding="27px">
              <FlexGrid is_flex justify="space-between">
                <Text size="14px">총 상품 금액</Text>
                <Text size="14px">19,800원</Text>
              </FlexGrid>
              <BorderGrid
                margin="15px 0 0 0"
                padding="15px 0 0 0"
                borderTop="1px solid #e1dedf"
              />
              <FlexGrid is_flex justify="space-between">
                <Text size="14px">총 배송비</Text>
                <Text>0원</Text>
              </FlexGrid>
              <FlexGrid is_flex justify="end" margin="10px 0 0 0">
                <Text size="12px" margin="0 20px 0 0" color="#9b9b9b">
                  기본 배송비
                </Text>
                <Text size="12px" color="#9b9b9b">
                  2,500원
                </Text>
              </FlexGrid>
              <FlexGrid is_flex justify="end" margin="10px 0 0 0">
                <Text size="12px" margin="0 20px 0 0" color="#4a90e2">
                  첫구매 무료배송
                </Text>
                <Text size="12px" color="#4a90e2">
                  -100%
                </Text>
              </FlexGrid>
              <BorderGrid
                margin="15px 0 0 0"
                padding="15px 0 0 0"
                borderTop="1px solid #e1dedf"
              />
              <FlexGrid is_flex justify="end">
                <Text size="12px" color="#4a90e2">
                  첫구매 무료배송 혜택이 적용되었습니다.
                </Text>
              </FlexGrid>
              <FlexGrid margin="20px 0 0 0">
                <Text size="12px" bold align="right">
                  예상 결제 금액
                </Text>
                <Text size="24px" bold align="right" color="#d0021b">
                  19,800원
                </Text>
              </FlexGrid>
              <Button bg="#d0021b" margin="15px 0 0 0" padding="15px">
                <Text bold align="center" color="#fff">
                  전체상품 주문하기
                </Text>
              </Button>
              <Button bg="#acacac" margin="15px 0 0 0" padding="15px">
                <Text bold align="center" color="#fff">
                  쇼핑계속하기
                </Text>
              </Button>
            </BorderGrid>
          </FlexGrid>
        </FlexGrid>
      </Container>
    </>
  );
};

const BorderGrid = styled.div`
  margin: ${(props) => (props.margin ? props.margin : "0")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
  border-top: ${(props) =>
    props.borderTop ? props.borderTop : "1px solid #000"};
  background-color: #f8f8f8;
`;

export default Cart;
