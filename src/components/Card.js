import React from "react";
import styled from "styled-components";
import { FlexGrid, Image, Text } from "../elements";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as cartActions } from "../redux/modules/cart";

// @mida_작업__Card UI 및 기능__
const Card = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);
  const { sumImgUrl, title, defaultprice, item } = props;
  const badge_text = title.indexOf("무항생제") !== -1 ? true : false;

  const onClick = (e, item) => {
    e.stopPropagation();
    if (!is_login) {
      alert("로그인 후 이용할 수 있습니다.");
      return;
    }

    const newItem = {
      itemId: item.itemId,
      amount: 1,
      option: "옵션 text",
      defaultprice,
    };
    dispatch(cartActions.postCartFB(newItem));
  };

  return (
    <>
      <ItemWrap>
        {badge_text && <Badge>무항생제</Badge>}
        <Image type="default" src={sumImgUrl} />
        <Cart onClick={(e) => onClick(e, item)}>
          <ShoppingCartIcon style={{ fontSize: "1.8rem" }} />
        </Cart>
      </ItemWrap>
      <FlexGrid margin="22px 0 0 0">
        <Text size="18px" bold>
          {title}
        </Text>
        <Text size="16px" color="#9b9b9b" margin="5px 0 0 0" weight="300">
          기준가 {defaultprice}원
        </Text>
      </FlexGrid>
    </>
  );
};

const ItemWrap = styled.div`
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

const Badge = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 5px 10px;
  font-size: 14px;
  font-weight: bold;
  color: #60bed1;
  background-color: #fff;
  border: 3px solid #68d1e6;
  border-radius: 20px;
`;
export default Card;
