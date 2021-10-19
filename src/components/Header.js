import React from "react";
import { history } from "../redux/configureStore";
import styled from "styled-components";
import { LogoImage } from "../image";
import { Container, FlexGrid, Link } from "../elements";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";

// @mida_작업__Header UI 및 기능__
const Header = () => {
  const cart_count = useSelector((state) => state.cart.cart_count);
  return (
    <>
      <HeaderBg>
        <Container>
          <FlexGrid is_flex justify="space-between">
            <Logo onClick={() => history.push("/")}>
              <Image src={LogoImage} />
            </Logo>
            <FlexGrid is_flex justify="space-between" flex>
              <FlexGrid>
                <Link fontSize="18px" _onClick={() => history.push("/meat")}>
                  쇼핑하기
                </Link>
                <Link fontSize="18px">배송안내</Link>
                <Link fontSize="18px">이벤트</Link>
              </FlexGrid>
              <FlexGrid>
                <Link>공지사항</Link>
                <Link>고객센터</Link>
                <Link line>|</Link>
                <Link _onClick={() => history.push("/login")}>로그인</Link>
                <Link _onClick={() => history.push("/signup")}>회원가입</Link>
                <Link fontSize="17px" _onClick={() => history.push("/cart")}>
                  <CartWrap>
                    <ShoppingCartIcon
                      style={{ verticalAlign: "bottom", fontSize: "2rem" }}
                    />
                    {cart_count > 0 && (
                      <CartCount>
                        <Text color="#fff">{cart_count}</Text>
                      </CartCount>
                    )}
                  </CartWrap>
                </Link>
              </FlexGrid>
            </FlexGrid>
          </FlexGrid>
        </Container>
      </HeaderBg>
    </>
  );
};

const HeaderBg = styled.div`
  position: fixed;
  width: 100%;
  height: 90px;
  line-height: 70px;
  color: #fff;
  background-color: #000;
  z-index: 999;
`;

const Logo = styled.h1`
  display: inline-block;
  margin: 0 20px 0 0;
  padding: 0;
  width: 120px;
  &:hover {
    cursor: pointer;
  }
`;
const Image = styled.img`
  width: 100%;
  margin-top: 20px;
`;
const CartWrap = styled.div`
  position: relative;
`;
const CartCount = styled.div`
  position: absolute;
  top: -13px;
  right: -13px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  text-align: center;
  background-color: #e03131;
`;

const Text = styled.span`
  padding-top: 3px;
  font-size: 14px;
  font-weight: bold;
  vertical-align: bottom;
  color: #fff;
`;

export default Header;
