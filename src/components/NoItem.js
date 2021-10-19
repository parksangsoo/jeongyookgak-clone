import React from "react";
import styled from "styled-components";
import { Container, FlexGrid } from "../elements";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { history } from "../redux/configureStore";
const NoItem = (props) => {
  return (
    <Container>
      <Wrap>
        <Text>장바구니에 담은 상품이 없습니다.</Text>
        <Button onClick={() => history.push("/")}>
          <FlexGrid>쇼핑계속하기</FlexGrid>
          <ArrowRightAltIcon />
        </Button>
      </Wrap>
    </Container>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 60px 0;
  border-top: 1px solid #000;
  border-bottom: 1px solid #e1dedf;
`;
const Text = styled.h1`
  font-size: 32px;
  color: #e1dedf;
`;
const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 260px;
  margin-top: 50px;
  padding: 20px;
  color: #fff;
  font-weight: bold;
  border: 0;
  background-color: #000;
  &:hover {
    cursor: pointer;
  }
`;
export default NoItem;
