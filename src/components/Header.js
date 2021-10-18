import React from "react";
import styled from "styled-components";
import { LogoImage, cart } from "../image";
import { Container, FlexGrid, Link } from "../elements";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AccessAlarm, ShoppingCartIcon } from "@mui/icons-material";
const Header = () => {
  return (
    <>
      <HeaderBg>
        <Container>
          <FlexGrid is_flex justify="space-between">
            <Logo>
              <Image src={LogoImage} />
            </Logo>
            <FlexGrid is_flex justify="space-between" flex>
              <FlexGrid>
                <Link fontSize="18px">쇼핑하기</Link>
                <Link fontSize="18px">배송안내</Link>
                <Link fontSize="18px">이벤트</Link>
              </FlexGrid>
              <FlexGrid>
                <Link>공지사항</Link>
                <Link>고객센터</Link>
                <Link line style={{ fontSize: 13 }}>
                  |
                </Link>
                <Link>로그인</Link>
                <Link>회원가입</Link>
                <Link>
                  장바구니
                  <ShoppingCartIcon />
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
`;
const Image = styled.img`
  width: 100%;
  margin-top: 20px;
`;

export default Header;
