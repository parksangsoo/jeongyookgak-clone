import React from "react";
import styled from "styled-components";

const Container = (props) => {
  const { margin, padding, children } = props;
  const styles = {
    margin: margin,
    padding: padding,
  };
  return (
    <>
      <ContainerWrap {...styles}>{children}</ContainerWrap>
    </>
  );
};

Container.defaultProps = {
  margin: "0 auto",
  padding: 0,
};

const ContainerWrap = styled.div`
  width: 1180px;
  height: auto;
  ${(props) => (props.margin ? `margin:${props.margin};` : "margin:0 auto")}
  ${(props) => (props.padding ? `padding:${props.padding};` : "")};
`;

export default Container;
