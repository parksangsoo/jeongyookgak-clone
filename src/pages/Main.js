import React from "react";
import Card from "../components/Card";
import styled from "styled-components";
import { Container, FlexGrid, Image, Text } from "../elements";
import {
  main_top,
  main_img01,
  main_img02,
  main_item01,
  main_item02,
  main_item03,
  main_item04,
  main_item05,
  main_item06,
} from "../image";

const Main = (props) => {
  const data = [
    {
      id: 1,
      src: main_item01,
      title: "초신선 돼지 삼겹살 구이용",
      text: "기준가 16,800원/600g",
    },
    {
      id: 2,
      src: main_item02,
      title: "초신선 돼지 삼겹살 구이용",
      text: "기준가 16,800원/600g",
    },
    {
      id: 3,
      src: main_item03,
      title: "초신선 돼지 삼겹살 구이용",
      text: "기준가 16,800원/600g",
    },
    {
      id: 4,
      src: main_item04,
      title: "초신선 돼지 삼겹살 구이용",
      text: "기준가 16,800원/600g",
    },
    {
      id: 5,
      src: main_item05,
      title: "초신선 돼지 삼겹살 구이용",
      text: "기준가 16,800원/600g",
    },
    {
      id: 6,
      src: main_item06,
      title: "초신선 돼지 삼겹살 구이용",
      text: "기준가 16,800원/600g",
    },
  ];
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
              return <Card key={item.id} {...item} />;
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
