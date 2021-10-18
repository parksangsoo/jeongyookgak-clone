import React from "react";
import styled from "styled-components";
import { Text, FlexGrid } from "../elements";
import { kakao, naver } from "../image";
const Login = (props) => {
  const [state, setState] = React.useState({ useremail: "", password: "" });
  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  return (
    <>
      <LoginForm>
        <Text size="24px" align="center" bold>
          로그인
        </Text>
        <FlexGrid margin="60px 0 0 0">
          <Text size="18px" bold>
            이메일로 로그인
          </Text>
          <FlexGrid margin="8px 0 0 0">
            <Input
              width="100%"
              name="useremail"
              value={state.useremail}
              onChange={onChange}
              placeholder="아이디(이메일 주소)를 입력하세요."
            />
          </FlexGrid>
          <FlexGrid margin="8px 0 0 0">
            <Input
              width="100%"
              name="password"
              value={state.password}
              onChange={onChange}
              placeholder="비밀번호를 입력하세요."
            />
          </FlexGrid>
          <FlexGrid margin="8px 0 0 0">
            <Button>로그인</Button>
          </FlexGrid>
          <FlexGrid margin="60px 0 0 0">
            <Text size="18px" bold>
              SNS 간편 로그인
            </Text>
            <Button
              style={{
                margin: "10px 0 0 0",
                backgroundColor: "#fae100",
                color: "#000",
              }}
            >
              <Icon src={kakao} />
              카카오로 시작하기
            </Button>
            <Button
              style={{
                margin: "10px 0 0 0",
                backgroundColor: "#1ec800",
              }}
            >
              <Icon src={naver} style={{ width: 23 }} />
              네이버로 시작하기
            </Button>
          </FlexGrid>
          <FlexGrid margin="30px 0 0 0">
            <Text align="center">
              정육각이 처음이신가요? <Span>회원가입하기</Span>
            </Text>
          </FlexGrid>
        </FlexGrid>
      </LoginForm>
    </>
  );
};

const LoginForm = styled.div`
  width: 312px;
  margin: 0 auto;
  padding-top: 160px;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  border: 1px solid #e1dedf;
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  font-size: 15px;
  border-radius: 4px;
  background-color: #000;
  color: #fff;
  border: 0;
  &:hover {
    cursor: pointer;
  }
`;
const Icon = styled.img`
  width: 25px;
  object-fit: cover;
  vertical-align: bottom;
  margin-right: 8px;
`;

const Span = styled.span`
  color: #e92d44;
`;

export default Login;
