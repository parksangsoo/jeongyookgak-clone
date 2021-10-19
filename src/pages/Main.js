import React from "react";
import Card from "../components/Card";
import styled from "styled-components";
import { history } from "../redux/configureStore";
import { useSelector } from "react-redux";
import { Container, FlexGrid, Image, Text } from "../elements";
import { main_top, main_img01, main_img02 } from "../image";

// @mida_작업__Main UI 및 기능__
const Main = () => {
  const data = useSelector((state) => state.main.best_list);

  const onClick = (id) => {
    history.push(`/detail/${id}`);
  };

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
          <FlexGrid is_flex justify="space-between">
            {data.map((item) => {
              return (
                <FlexGrid
                  width="32%"
                  margin="30px 0 0 0"
                  key={item.itemId}
                  _onClick={() => onClick(item.itemId)}
                >
                  <Card {...item} item={item} />
                </FlexGrid>
              );
            })}
          </FlexGrid>
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
