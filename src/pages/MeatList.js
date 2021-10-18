import React,{useState} from 'react';
import styled from 'styled-components';
import { Grid, Button } from '../elements/index';
import Meat from '../components/Meat';
import ban_pork from '../image/pcpork.png';
import ban_beef from '../image/pcbeef.png';
import ban_kfc from '../image/pcchicken.png';

const MeatList = () => {

    const [meats,setMeat] = useState([
        {
            itemId: 0,
            title:"초신선 돼지 삼겹살 구이용",
            category: 0,
            defaultprice: "16800원",
            sumImgUrl: "https://firebasestorage.googleapis.com/v0/b/jyg-custom-seoul-app/o/frontend%2Fthumbnails%2Ftransparent_background%2Fporkbelly-fresh-list.png?alt=media"
        },
        {itemId: 1,
            title:"초신선 돼지 삼겹살 구이용",
            category: 0,
            defaultprice: "16800원",
            sumImgUrl: "https://firebasestorage.googleapis.com/v0/b/jyg-custom-seoul-app/o/frontend%2Fthumbnails%2Ftransparent_background%2Fporkbelly-fresh-list.png?alt=media"},
        {itemId: 2,
            title:"초신선 돼지 삼겹살 구이용",
            category: 0,
            defaultprice: "16800원",
            sumImgUrl: "https://firebasestorage.googleapis.com/v0/b/jyg-custom-seoul-app/o/frontend%2Fthumbnails%2Ftransparent_background%2Fporkbelly-fresh-list.png?alt=media"},
        {itemId: 3,
            title:"초신선 돼지 삼겹살 구이용",
            category: 0,
            defaultprice: "16800원",
            sumImgUrl: "https://firebasestorage.googleapis.com/v0/b/jyg-custom-seoul-app/o/frontend%2Fthumbnails%2Ftransparent_background%2Fporkbelly-fresh-list.png?alt=media"},
        {itemId: 4,
            title:"초신선 돼지 삼겹살 구이용",
            category: 0,
            defaultprice: "16800원",
            sumImgUrl: "https://firebasestorage.googleapis.com/v0/b/jyg-custom-seoul-app/o/frontend%2Fthumbnails%2Ftransparent_background%2Fporkbelly-fresh-list.png?alt=media"},
        {itemId: 5,
            title:"초신선 돼지 삼겹살 구이용",
            category: 0,
            defaultprice: "16800원",
            sumImgUrl: "https://firebasestorage.googleapis.com/v0/b/jyg-custom-seoul-app/o/frontend%2Fthumbnails%2Ftransparent_background%2Fporkbelly-fresh-list.png?alt=media"}
    ])



    return (
        <React.Fragment>
            <Grid>
                <Grid>
                    <Banner style={{ backgroundImage: `url(${ban_pork})` }}/>
                </Grid>
                <Grid is_flex margin="7.2rem auto 0 auto">
                    <MeatBtn>돼지</MeatBtn>
                    <MeatBtn>소</MeatBtn>
                    <MeatBtn>닭</MeatBtn>
                    <MeatBtn>수산</MeatBtn>
                    <MeatBtn>밀키트</MeatBtn>
                    <MeatBtn>우유</MeatBtn>
                    <MeatBtn>달걀</MeatBtn>
                    <MeatBtn>이유식</MeatBtn>
                </Grid>
                <Grid is_grid width="75rem" margin="auto">
                    {meats.map((meat)=>{
                        return <Meat key={meat.id} {...meat}/>
                    })}
                </Grid>
            </Grid>
        </React.Fragment>
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
  padding-top: 35rem;
  background-position: 100%;
  background-size: cover;
`;

export default MeatList;

