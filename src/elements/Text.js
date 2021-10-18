import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const { bold, color, size, children, margin, padding, align } = props;

  const styles = {
    bold: bold,
    color: color,
    size: size,
    margin,
    padding,
    align,
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
};

const P = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "600" : "400")};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")};
  ${(props) => (props.align ? `text-align: ${props.align};` : "")};
  word-break : break-all;
`;

export default Text;
