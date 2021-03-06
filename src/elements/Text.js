import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const { bold, color, size, children, margin, padding, align, flex, weight } =
    props;

  const styles = {
    bold: bold,
    color: color,
    size: size,
    margin: margin,
    padding: padding,
    align: align,
    weight: weight,
    flex: flex,
  };
  return <P {...styles}>{children}</P>;
};

Text.defaultProps = {
  children: null,
  bold: false,
  color: "#222831",
  size: "14px",
  margin: false,
  padding: 0,
  align: "left",
  flex: false,
  weight: "400",
};

const P = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "600" : props.weight)};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")};
  ${(props) => (props.align ? `text-align: ${props.align};` : "")};
  ${(props) => (props.flex ? `flex: 1` : "")};
  word-break: break-all;
`;

export default Text;
