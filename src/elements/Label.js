import React from "react";
import styled from "styled-components";

const Label = (props) => {
  const { width, padding, fontSize, color, bg, border, children } = props;
  const styles = {
    width: width,
    padding: padding,
    fontSize: fontSize,
    color: color,
    bg: bg,
    border: border,
  };
  return <LabelText {...styles}>{children}</LabelText>;
};

Label.defaultProps = {
  width: "auto",
  padding: 0,
  fontSize: "13px",
  color: "#000",
  bg: "#fff",
  border: "0",
};

const LabelText = styled.label`
  width: ${(props) => (props.width ? props.width : `auto`)};
  padding: ${(props) => (props.padding ? props.padding : "0")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : `13px`)};
  color: ${(props) => (props.color ? props.color : `#000`)};
  border: ${(props) => (props.border ? props.border : `0`)};
  background-color: ${(props) => (props.bg ? props.bg : `#fff`)};
`;

export default Label;
