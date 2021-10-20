import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {
  Grid,
  Container,
  Image,
  Text,
  Button,
  FlexGrid,
  TextButton,
} from "../elements/index";
import SelectLabels from "../components/SelectBox";
import styled from "styled-components";
import { history } from "../redux/configureStore";
import CommentList from "../components/CommentList";
import CommentWrite from "../components/CommentWrite";
import ItemDesc from "../components/ItemDesc";
import {actionCreators as postActions} from "../redux/modules/post";
import { main_item01 } from "../image";
import { off } from "process";

const Detail = (props) => {
  const dispatch = useDispatch();
  const _item = useSelector(state=>state.post.list);
  const [count, setCount] = useState(1);
  const [menu, setMenu] = useState(false);
  const _id = props.match.params.id;
  const item = _item[0]
  const menuSelect = (v) => {
    setMenu(v);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const increment = () => {
    setCount(count + 1);
  };
  React.useEffect(()=>{
    dispatch(postActions.getDetailMiddleware(_id));
  },[]);
  
  if(item){
  return (
    <React.Fragment>
      <Grid bg="#1c1c1c" padding="0px 0px 50px 0px">
        <Container>
          <Grid
            width="980px"
            height="656px"
            is_flex
            padding="156px 0px 0px 0px"
            margin="auto"
          >
            <Grid width="500px" height="500px" margin="0px, 70px, 0px, 30px">
              <Image src={item.sumImgUrl}></Image>
            </Grid>
            <Grid width="380px" height="500px" margin="0px">
              <h2
                style={{
                  color: "#fff",
                  fontSize: "28px",
                  lineHeight: "41px",
                  wordBreak: "keep-all",
                }}
              >
                {item.title}
              </h2>
              <Text size="16px" margin="20px 0px" color="#9b9b9b" bold>
                {item.detailprice}
              </Text>
              <Text size="24px" margin="6px 0px" color="#fff" bold>
                {item.defaultprice}
              </Text>
              <Grid
                width="380px"
                height="1px"
                bg="#4a4a4a"
                margin="26px 0px 0px 0px"
              ></Grid>
              <FlexGrid is_flex margin="20px 0px">
                <OptionText>옵션</OptionText>

                <OptionGrid>
                  <SelectLabels  />        {/*옵션 설정*/}
                </OptionGrid>
              </FlexGrid>
              <FlexGrid is_flex margin="20px 0px">
                <OptionText>수량</OptionText>
                <OptionGrid>
                  <DetailButton onClick={decrement}> - </DetailButton>
                  <CountGrid>
                    <Text
                      padding="6px"
                      margin="auto"
                      color="#fff"
                      size="30px"
                      align="center"
                    >
                      {count}
                    </Text>
                  </CountGrid>
                  <DetailButton onClick={increment}> + </DetailButton>
                </OptionGrid>
              </FlexGrid>
              <Grid
                margin="40px auto"
                height="60px"
                is_flex
                align_items="start"
              >
                <Button
                  bg="#888"
                  width="180px"
                  height="60px"
                  size="16px"
                  bold
                  _onClick={() => {
                    history.push("/");
                  }}
                >
                  바로구매
                </Button>
                <Button
                  bg="#d0021b"
                  width="180px"
                  height="60px"
                  size="16px"
                  bold
                  _onClick={() => {
                    history.push("/");
                  }}
                >
                  장바구니
                </Button>
              </Grid>
              <Grid
                margin="40px auto"
                height="60px"
                is_flex
                align_items="start"
              >
                <Button
                  bg="#888"
                  width="180px"
                  height="60px"
                  size="16px"
                  bold
                  _onClick={() => {
                    console.log(item)
                  }}
                >
                  상품삭제
                </Button>
                <Button
                  bg="#d0021b"
                  width="180px"
                  height="60px"
                  size="16px"
                  bold
                  _onClick={() => {
                    history.push("/");
                  }}
                >
                  상품수정
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <Container>
        <FlexGrid
          is_flex
          justify="center"
          padding="36.5px"
          style={{ borderBottom: "1px solid #979797" }}
        >
          {/* <Grid width="auto" is_flex height="109px"> */}
          <TextButton
            size="18px"
            margin_top="15px"
            margin_right="63.5px"
            value={!menu}
            _onClick={() => {
              menuSelect(false);
            }}
          >
            상품설명
          </TextButton>
          <TextButton
            size="18px"
            margin_top="15px"
            margin_right="63.5px"
            value={menu}
            _onClick={() => {
              menuSelect(true);
            }}
          >
            상품리뷰
          </TextButton>
          <TextButton size="18px" margin_top="15px">
            상품정보안내
          </TextButton>
          {/* </Grid> */}
        </FlexGrid>
      </Container>
      <Container>
        {menu ? (
          <>
            <CommentWrite item_id={_id}/>
            <CommentList item_id={_id}/>
          </>
        ) : (
          
          <ItemDesc src={item.detailImgUrl}/>
        )}
      </Container>
    </React.Fragment>
  );
} return null;
};

const OptionText = styled.p`
  color: #fff;
  font-size: 18px;
  margin: 15px 0px 0px 0px;
  font-weight: 700;
`;

const DetailButton = styled.button`
  width: 50px;
  height: 50px;
  border: solid 1px #7c7c7c;
  background-color: #1c1c1c;
  color: #7c7c7c;
  font-size: 30px;
`;

const OptionGrid = styled.div`
  width: 317px;
  margin: 0px 0px 0px 27px;
  height: auto;
  display: flex;
  justify-content: space-between;
`;

const CountGrid = styled.div`
  width: 217px;
  display: "flex";
  align-items: "center";
  border: solid #7c7c7c;
  border-width: 1px 0px;
`;

export default Detail;
