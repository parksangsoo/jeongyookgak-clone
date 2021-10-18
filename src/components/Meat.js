import React from 'react';
import styled from 'styled-components';
import { Grid, Text, Image } from '../elements/index';
import { FaCartPlus } from "react-icons/fa";

const Meat = (props) => {
    return (
        <React.Fragment>
            <Grid width="23rem">
                <Grid bg="#f9f7f8" height="25rem">
                    <Image src={props.sumImgUrl} size="15rem"></Image>
                    <Cart style={{ backgroundColor: "white" }}>
                        <FaCartPlus size="40px"/>
                    </Cart>
                </Grid>
                <Grid margin="-1rem 0rem -1rem 0rem">
                    <Text bold size="1.2rem">{props.title}</Text>
                </Grid>
                <Grid>
                    <Text>기준가 {props.defaultprice}/600g</Text>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

const Cart = styled.button`
  position: relative;
  bottom: 4rem;
  left: 17rem;
  width: 5.2rem;
  height: 5.2rem;
  box-shadow: 0 25px 10px -15px rgb(0 0 0 / 12%);
  border: 0.2rem solid #eee;
  border-radius: 50%;
  background-color: white;
  display: block;
  cursor: pointer;
`;


export default Meat;