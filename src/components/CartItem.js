import React from "react";
import styled from "styled-components";
import { FlexGrid, Text, Image } from "../elements";
import { cart01 } from "../image";
import AddIcon from "@mui/icons-material/Add";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import ClearIcon from "@mui/icons-material/Clear";
const CartItem = (props) => {
  console.log("CartItem == ", props);
  return (
    <>
      <TableGridWrap borderTop="1px solid #000">
        <TableGrid width="150px"></TableGrid>
        <TableGrid flex>상품정보</TableGrid>
        <TableGrid width="150px">수량</TableGrid>
        <TableGrid width="120px">가격</TableGrid>
        <TableGrid width="70px"></TableGrid>
      </TableGridWrap>
      <TableGridWrap borderTop="1px solid #e1dedf">
        <TableGrid width="150px">
          <Image type="default" src={cart01} />
        </TableGrid>
        <TableGrid flex>
          <Text>초신선 무항생제 돼지 삼겹살 구이용</Text>
          <Text size="13px" color="#9b9b9b" margin="8px 0 0 0">
            보통(16mm)
          </Text>
        </TableGrid>
        <TableGrid width="150px">
          <FlexGrid is_flex border="1px solid #dcdcdc">
            <Button>
              <HorizontalRuleIcon
                style={{ fontSize: "18px", verticalAlign: "bottom" }}
              />
            </Button>
            <Text flex align="center" size="18px">
              1
            </Text>
            <Button>
              <AddIcon style={{ fontSize: "18px", verticalAlign: "bottom" }} />
            </Button>
          </FlexGrid>
        </TableGrid>
        <TableGrid width="120px">
          <Text size="17px">19,800원</Text>
        </TableGrid>
        <TableGrid width="70px">
          <Button border="1px solid #eee">
            <ClearIcon style={{ fontSize: "18px", verticalAlign: "bottom" }} />
          </Button>
        </TableGrid>
      </TableGridWrap>
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

const Button = styled.button`
  padding: 12px 15px;
  color: #9b9b9b;
  border: ${(props) => (props.border ? props.border : "0")};
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;
export default CartItem;
