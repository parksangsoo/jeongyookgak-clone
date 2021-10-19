import React from "react";
import styled from "styled-components";
import { FlexGrid, Text, Image } from "../elements";
import AddIcon from "@mui/icons-material/Add";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import ClearIcon from "@mui/icons-material/Clear";

// @mida_작업__CartItem UI 및 기능__
const CartItem = (props) => {
  const { price, sumImgUrl, title, option } = props;

  const [state, setState] = React.useState({ price: price, count: 1 });

  const onIncrease = (price) => {
    setState({ ...state, price: state.price + price, count: state.count + 1 });
  };

  const onDecrease = (price) => {
    setState({
      ...state,
      price: state.price - price,
      count: state.count - 1,
    });
  };

  return (
    <>
      <TableGridWrap borderTop="1px solid #e1dedf">
        <TableGrid width="150px">
          <Image type="default" src={sumImgUrl} />
        </TableGrid>
        <TableGrid flex>
          <Text>{title}</Text>
          <Text size="13px" color="#9b9b9b" margin="8px 0 0 0">
            {option}
          </Text>
        </TableGrid>
        <TableGrid width="150px">
          <FlexGrid is_flex border="1px solid #dcdcdc">
            <Button onClick={() => onDecrease(price)}>
              <HorizontalRuleIcon
                style={{ fontSize: "18px", verticalAlign: "bottom" }}
              />
            </Button>
            <Text flex align="center" size="18px">
              {state.count > 1 ? state.count : 1}
            </Text>
            <Button onClick={() => onIncrease(price)}>
              <AddIcon style={{ fontSize: "18px", verticalAlign: "bottom" }} />
            </Button>
          </FlexGrid>
        </TableGrid>
        <TableGrid width="120px">
          <Text size="17px">{state.price > 10000 ? state.price : 10000}원</Text>
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
