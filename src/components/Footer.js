import React from "react";
import styled from "styled-components";
import { footerLogo } from "../image";
import { Container, FlexGrid, Text, Image } from "../elements";
import InstagramIcon from "@mui/icons-material/Instagram";
import SmsIcon from "@mui/icons-material/Sms";

// @mida_작업__Footer UI__
const Footer = (props) => {
  return (
    <FooterWrap>
      <FooterLine>
        <Container>
          <FlexGrid is_flex justify="space-between">
            <FlexGrid is_flex>
              <Text>이용약관</Text>
              <Text bold margin="0 0 0 25px">
                개인정보처리방침
              </Text>
            </FlexGrid>
            <FlexGrid is_flex>
              <AppButton>정육각 앱 설치</AppButton>
              <Text margin="0 15px">
                <SmsIcon />
              </Text>
              <Text>
                <InstagramIcon />
              </Text>
            </FlexGrid>
          </FlexGrid>
        </Container>
      </FooterLine>
      <Container>
        <FlexGrid is_flex justify="space-between">
          <FlexGrid width="82px">
            <Image type="default" src={footerLogo} />
          </FlexGrid>
          <FlexGrid>
            <Text align="right" bold>
              고객센터
            </Text>
            <Text size="24px" bold>
              1800-0658
            </Text>
          </FlexGrid>
        </FlexGrid>
        <FooterGrid alignItems="flex-end" margin="3px 0 0 0">
          <FlexGrid flex is_flex>
            <Text size="13px">(주)정육각</Text>
            <Text size="13px">대표이사: 김재연</Text>
            <Text size="13px" margin="0 10px" color="#ced4da">
              |
            </Text>
            <Text size="13px">
              주소: 경기도 김포시 고촌읍 아라육로57번길 126
            </Text>
          </FlexGrid>
          <FlexGrid justify="end">
            <Text size="12px" align="right" color="#868e96">
              평일: 08:30 - 17:30
            </Text>
            <Text size="12px" align="right" color="#868e96">
              점심: 12:30 - 13:30
            </Text>
            <Text size="12px" align="right" color="#868e96">
              (토, 일 및 공휴일 휴무)
            </Text>
          </FlexGrid>
        </FooterGrid>
        <FooterGrid is_flex justify="space-between" margin="5px 0 0 0">
          <FlexGrid is_flex>
            <Text size="12px">사업자등록번호 : 224-87-00271 [조회]</Text>
            <Text size="12px" margin="0 10px" color="#ced4da">
              |
            </Text>
            <Text size="12px">통신판매업신고번호: 2021-경기김포-0668</Text>
          </FlexGrid>
          <FlexGrid>
            <Text size="13px" align="right">
              카카오톡: <span style={{ color: "#4bb8ce" }}>@정육각</span>
            </Text>
          </FlexGrid>
        </FooterGrid>
        <FooterGrid is_flex justify="space-between" margin="5px 0 0 0">
          <FlexGrid is_flex>
            <Text size="12px">
              개인정보관리책임자: 박준태(privacy@yookgak.com)
            </Text>
          </FlexGrid>
          <FlexGrid>
            <Text size="13px" align="right">
              이메일: <span style={{ color: "#4bb8ce" }}>help@yookgak.com</span>
            </Text>
          </FlexGrid>
        </FooterGrid>
        <FooterGrid is_flex justify="space-between" margin="10px 0 0 0">
          <FlexGrid is_flex>
            <Text size="12px">
              © 2021 Jeongyookgak Inc. All rights reserved.
            </Text>
          </FlexGrid>
          <FlexGrid is_flex>
            <AppButton size="12px" color="black" width="100px">
              자주묻는질문
            </AppButton>
            <AppButton
              size="12px"
              color="black"
              width="100px"
              margin="0 0 0 10px"
            >
              1:1문의
            </AppButton>
          </FlexGrid>
        </FooterGrid>
      </Container>
    </FooterWrap>
  );
};

const FooterWrap = styled.div`
  margin-top: 100px;
  padding: 0 0 20px;
  border-top: 1px solid #bdbdbd;
  object-fit: cover;
`;
const FooterGrid = styled.div`
  display: flex;
  justify-content: ${(props) => (props.justify ? props.justify : "flex-start")};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  flex: ${(props) => (props.flex ? "1" : "")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
`;
const FooterLine = styled.div`
  margin-bottom: 30px;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
`;
const AppButton = styled.button`
  width: ${(props) => (props.width ? props.width : "auto")};
  margin: ${(props) => (props.margin ? props.margin : `0`)};
  padding: ${(props) => (props.padding ? props.padding : `8px 15px`)};
  font-size: ${(props) => (props.size ? props.size : `13px`)};
  background-color: #fff;
  border: ${(props) =>
    props.color ? `1px solid ${props.color}` : `1px solid #eee`};
  border-radius: 3px;
  &:hover {
    cursor: pointer;
  }
`;
export default Footer;
