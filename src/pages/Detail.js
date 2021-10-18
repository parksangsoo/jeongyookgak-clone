import React from "react";
import { Grid, Container, Image, Text, Button  } from "../elements/index";
import styled from "styled-components";
const Detail = (props) => {
  return (
    <React.Fragment>
      <Grid bg="#1c1c1c" padding="0px 0px 50px 0px">
        <Container>
          <Grid width="980px" height="560px" is_flex padding="60px 0px 0px 0px">
            <Grid width="500px" height="500px" margin="0px, 70px, 0px, 30px">
              <Image></Image>
            </Grid>
            <Grid width="380px" height="500px" margin="0px">
              <h2 style={{color:"#fff", fontSize:"28px", lineHeight:"41px", wordBreak:"keep-all"}}>초신선 무항생제 돼지 삼겹살 구이용</h2>
              <Text size = "16px" margin="20px 0px 0px 0px" color = "#9b9b9b" bold>100g당 3,300원</Text>
              <Text size="24px" line-height="33px" color="#fff" margin="6px 0px 0px 0px">기준가 19,800원(600g)</Text>
              <Grid width="380px" height="1px" bg="#4a4a4a" margin = "26px 0px 0px 0px"></Grid>
              <Grid margin ="29px 0px 0px 0px" is_flex align_items="start">
                  <Text size="18px" color="#fff" margin="9px 0px 0px 0px">옵션</Text>
                  <Grid border= "1px solid #7c7c7c" width="317px" margin="0px 0px 0px 27px" height = "auto">
                    <Button size="16px" bg="#1c1c1c" position="relative" height="50px" padding="0px">보통(16mm)</Button>
                  </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </React.Fragment>
  );
};

const TitleText = styled.h2`
    color :"white"; 
    font-size : "28px";
    line-height : "41px";
    word-break : "keep-all";
`;

export default Detail;
