import React, { useEffect } from "react";
import styled from "styled-components";
import { Container, FlexGrid, Button } from "../elements/index";
import Card from "../components/Card";
import banner_pork from "../image/pcpork.png";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as meatCreators } from "../redux/modules/post";

const MeatList = (props) => {
  const dispatch = useDispatch();
  const meats = useSelector((state) => state.post.list);
  const is_login = useSelector((state) => state.user.is_login);
  const { history } = props;
  const [pork, setPork] = React.useState(true);
  const [beef, setBeef] = React.useState(false);
  const [kfc, setKfc] = React.useState(false);

  useEffect(() => {
    dispatch(meatCreators.getMeatMiddleware());
    console.log(meats)
  }, []);

  const changePork = () => {
    setPork(true);
    setBeef(false);
    setKfc(false);
  };

  const changeBeef = () => {
    setBeef(true);
    setPork(false);
    setKfc(false);
  };

  const changeKfc = () => {
    setKfc(true);
    setPork(false);
    setBeef(false);
  };

  return (
    <>
      <FlexGrid>
        <FlexGrid>
          <Banner style={{ backgroundImage: `url(${banner_pork})` }} />
        </FlexGrid>
        <Container margin="50px auto">
          <FlexGrid is_flex>
            <MeatBtn
              bg={pork ? "#212121" : "#eee"}
              color={pork ? "white" : "#212121"}
              onClick={changePork}
            >
              돼지
            </MeatBtn>
            <MeatBtn
              bg={beef ? "#212121" : "#eee"}
              color={beef ? "white" : "#212121"}
              onClick={changeBeef}
            >
              소
            </MeatBtn>
            <MeatBtn
              bg={kfc ? "#212121" : "#eee"}
              color={kfc ? "white" : "#212121"}
              onClick={changeKfc}
            >
              닭
            </MeatBtn>
          </FlexGrid>
          {pork && !beef && !kfc ? (
            <FlexGrid is_flex justify="space-between">
              {meats.map((meat) => {
                if (meat.category === "pork") {
                  return (<FlexGrid>
                          <Card key={meat.item_id} {...meat} />
                        </FlexGrid>)
                }
                return null;
              })}
            </FlexGrid>
          ) : (
            ""
          )}
          {!pork && beef && !kfc ? (
            <FlexGrid is_flex justify="space-between">
              {meats.map((meat) => {
                if (meat.category === "beaf") {
                  return (<FlexGrid>
                    <Card key={meat.item_id} {...meat} />
                  </FlexGrid>)
                }
                return null;
              })}
            </FlexGrid>
          ) : (
            ""
          )}
          {!pork && !beef && kfc ? (
            <FlexGrid is_flex justify="space-between">
              {meats.map((meat) => {
                if (meat.category === "chicken") {
                  return (<FlexGrid>
                    <Card key={meat.item_id} {...meat} />
                  </FlexGrid>)
                }
                return null;
              })}
            </FlexGrid>
          ) : (
            ""
          )}
        </Container>
      </FlexGrid>
      {is_login?(<Button
          is_float
          _onClick={() => {
            history.push("/meatwrite");
          }}
        >
          +
        </Button>):''}
      
    </>
  );
};

const MeatBtn = styled.button`
  background-color: #eee;
  width: 9rem;
  height: 3rem;
  border: none;
  border-radius: 0.2rem;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bg};
  font-size: 1rem;
  font-weight: 700;
  margin: 0rem 0rem 5rem 0.5rem;
  cursor: pointer;
  &:hover {
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
