import React from "react";
import styled from "styled-components";

const FlexGrid = (props) => {
  const { is_flex, justify, width, margin, padding, flex, border, children } =
    props;
  const styles = {
    is_flex: is_flex,
    justify: justify,
    width: width,
    margin: margin,
    padding: padding,
    flex: flex,
    border: border,
  };
  return <FlexGridWrap {...styles}>{children}</FlexGridWrap>;
};

FlexGrid.defaultProps = {
  is_flex: false,
  justify: "flex-start",
  width: "auto",
  margin: 0,
  padding: 0,
  flex: false,
  border: 0,
};

const FlexGridWrap = styled.div`
  display: ${(props) => (props.is_flex ? "flex" : "")};
  justify-content: ${(props) => (props.justify ? props.justify : "flex-start")};
  align-items: center;
  width: ${(props) => (props.width ? props.width : "auto")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
  flex-wrap: wrap;
  flex: ${(props) => (props.flex ? "1" : "")};
  border: ${(props) => (props.border ? props.border : "")};
`;

export default FlexGrid;