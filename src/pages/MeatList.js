import React,{useState} from 'react';
import styled from 'styled-components';
import { Container, FlexGrid } from '../elements/index';
import Card from '../components/Card';
import banner_pork from "../image/pcpork.png";
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

const MeatList = () => {

    const datas = [
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
            
            <FlexGrid>
                <FlexGrid>
                    <Banner style={{ backgroundImage: `url(${banner_pork})` }}/>
                </FlexGrid>
                <Container margin="50px auto">
                <FlexGrid is_flex>
                    <MeatBtn>돼지</MeatBtn>
                    <MeatBtn>소</MeatBtn>
                    <MeatBtn>닭</MeatBtn>
                    <MeatBtn>수산</MeatBtn>
                    <MeatBtn>밀키트</MeatBtn>
                    <MeatBtn>우유</MeatBtn>
                    <MeatBtn>달걀</MeatBtn>
                </FlexGrid>
                <FlexGrid is_flex justify="space-between">
                    {datas.map((data)=>{
                        return <Card key={data.id} {...data}/>
                    })}
                </FlexGrid>
                </Container>
            </FlexGrid>
            
        </>
    );
};

const MeatBtn = styled.button`
  background-color: #eee;
  width: 9rem;
  height: 3rem;
  border: none;
  border-radius: 0.2rem;
  color: #212121;
  font-size: 1rem;
  font-weight: 700;
  margin: 0rem 0rem 5rem 0.5rem;
  cursor: pointer;
  &:hover{
    background-color: #212121;
    color: white;
    font-weight: 700;
  }
`;

const Banner = styled.div`
  padding-top: 38rem;
  background-position: 100%;
  background-size: cover;
`;


export default MeatList;

