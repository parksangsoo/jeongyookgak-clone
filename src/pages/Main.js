import React from "react";
import Card from "../components/Card";
import styled from "styled-components";
import { history } from "../redux/configureStore";
import { useSelector, useDispatch } from "react-redux";
import { Container, FlexGrid, Image, Text } from "../elements";
import { main_top, main_img01, main_img02, main_img03 } from "../image";
import { actionCreators as mainActions } from "../redux/modules/main";

// @mida_작업__Main UI 및 기능__
const Main = () => {
  const data = useSelector((state) => state.main.best_list);
  const dispatch = useDispatch();

  const onClick = (id) => {
    history.push(`/detail/${id}`);
  };

  React.useEffect(() => {
    dispatch(mainActions.getBestListFB());
  }, []);

  return (
    <>
      <MainTop src={main_top} />
      <Container margin="50px auto">
        <FlexGrid is_flex justify="space-between">
          <FlexGrid width="49%">
            <Image type="default" src={main_img01} />
          </FlexGrid>
          <FlexGrid width="49%">
            <Image type="default" src={main_img02} />
          </FlexGrid>
        </FlexGrid>
        <FlexGrid>
          <Text size="32px" bold>
            정육각 베스트 상품
          </Text>
          <FlexGrid is_flex justify="space-between" margin="30px 0 0 0">
            {data.map((item) => {
              return (
                <FlexGrid
                  width="32%"
                  margin="0 0 50px 0"
                  key={item.itemId}
                  _onClick={() => onClick(item.itemId)}
                >
                  <Card {...item} item={item} />
                </FlexGrid>
              );
            })}
          </FlexGrid>
        </FlexGrid>
        <FlexGrid margin="40px 0 0 0">
          <Image type="default" src={main_img03} />
        </FlexGrid>
      </Container>
    </>
  );
};

const MainTop = styled.img`
  width: 100%;
  margin-top: 90px;
  object-fit: cover;
`;

export default Main;
