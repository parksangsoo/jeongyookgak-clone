import React from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";
import { Container, Text, FlexGrid, DefaultInput, Button } from "../elements";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { checkValue } from "../shared/regExp";

// @mida_작업__Signup UI 및 기능__
const Signup = (props) => {
  const [state, setState] = React.useState({
    useremail: "",
    username: "",
    password: "",
    passwordCheck: "",
  });

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    console.log("state = ", state);
  };

  const onClick = () => {
    if (!checkValue(state.useremail)) {
      alert("아이디는 영문 숫자 조합 6자리 이상으로 입력해주세요");
      return;
    }
    if (!checkValue(state.password)) {
      alert("비밀번호는 영문 숫자 조합 6자리 이상으로 입력해주세요");
      return;
    }
    if (state.password !== state.passwordCheck) {
      alert("비밀번호가 다릅니다. 다시 확인해주세요");
      return;
    }
    if (
      state.useremail === "" ||
      state.password === "" ||
      state.passwordCheck === "" ||
      state.username === ""
    ) {
      alert("내용을 모두 입력해주세요");
      return;
    }
    console.log("회원가입완료");
  };
  return (
    <>
      <Container padding="160px 0 0 0">
        <Text size="32px" align="center">
          회원가입
        </Text>
        <GrayBox>
          <Text size="15px" align="center" bold>
            <DriveFileRenameOutlineIcon
              style={{ fontSize: "3rem", verticalAlign: "middle" }}
            />
            정보입력
          </Text>
        </GrayBox>
        <SignupForm>
          <Text>가입정보 입력</Text>
          <FlexGrid is_flex margin="20px 0 0 0">
            <Grid padding="20px" bg width="200px">
              <Label>아이디(이메일주소)</Label>
            </Grid>
            <Grid padding="14px" flex>
              <DefaultInput
                width="100%"
                name="useremail"
                value={state.useremail}
                _onChange={onChange}
                _onSubmit={onClick}
              />
            </Grid>
          </FlexGrid>
          <FlexGrid is_flex>
            <Grid padding="20px" bg width="200px">
              <Label>비밀번호</Label>
            </Grid>
            <Grid padding="14px" flex>
              <DefaultInput
                type="password"
                width="100%"
                name="password"
                value={state.password}
                _onChange={onChange}
                _onSubmit={onClick}
              />
            </Grid>
          </FlexGrid>
          <FlexGrid is_flex>
            <Grid padding="20px" bg width="200px">
              <Label>비밀번호 확인</Label>
            </Grid>
            <Grid padding="14px" flex>
              <DefaultInput
                type="password"
                width="100%"
                name="passwordCheck"
                value={state.passwordCheck}
                _onChange={onChange}
                _onSubmit={onClick}
              />
            </Grid>
          </FlexGrid>
          <FlexGrid is_flex>
            <Grid
              padding="20px"
              bg
              width="200px"
              style={{ borderBottom: "1px solid #e1dedf" }}
            >
              <Label>이름</Label>
            </Grid>
            <Grid
              padding="14px"
              flex
              style={{ borderBottom: "1px solid #e1dedf" }}
            >
              <DefaultInput
                width="100%"
                name="username"
                value={state.username}
                _onChange={onChange}
                _onSubmit={onClick}
              />
            </Grid>
          </FlexGrid>
          <FlexGrid is_flex justify="space-between" margin="20px 0 0 0">
            <FlexGrid width="50%">
              <Button bg="#888">
                <Text
                  bold
                  align="center"
                  color="#fff"
                  onClick={() => history.replace("/")}
                >
                  이전으로
                </Text>
              </Button>
            </FlexGrid>
            <FlexGrid width="50%">
              <Button _onClick={onClick}>
                <Text bold align="center" color="#fff">
                  가입하기
                </Text>
              </Button>
            </FlexGrid>
          </FlexGrid>
        </SignupForm>
      </Container>
    </>
  );
};

const SignupForm = styled.div`
  width: 780px;
  margin: 50px auto 30px;
`;
const GrayBox = styled.div`
  margin-top: 40px;
  padding: 20px 0;
  background-color: #f7f7f7;
`;
const Grid = styled.div`
  width: ${(props) => (props.width ? props.width : "auto")};
  padding: ${(props) => (props.padding ? props.padding : "10px")};
  background-color: ${(props) => (props.bg ? "#f7f7f7" : "#fff")};
  flex: ${(props) => (props.flex ? "1" : "")};
  text-align: center;
  border: 1px solid #e1dedf;
  border-bottom: 0;
`;
const Label = styled.label`
  font-size: 12px;
  text-align: center;
`;

export default Signup;
