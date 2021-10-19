import React from "react";
import styled from "styled-components";

const TextButton = (props) => {
  const {
    children,
    size,
    margin,
    color,
    _onClick,
    margin_top,
    margin_right,
    value,
  } = props;

  const styles = {
    size: size,
    margin: margin,
    color: color,
    margin_top: margin_top,
    margin_right: margin_right,
    value: value,
  };
  return (
    <P onClick={_onClick} {...styles}>
      {children}
    </P>
  );
};

TextButton.defaultProps = {
  children: null,
  _onClick: () => {},
  margin: false,
};
const P = styled.p`
  color: #c2c2c2;
  ${(props) => (props.size ? `font-size:${props.size}` : "")};
  ${(props) => (props.margin ? `margin:${props.margin}` : "")};
  ${(props) => (props.margin_top ? `margin-top:${props.margin_top}` : "")};
  ${(props) =>
    props.margin_right ? `margin-right:${props.margin_right}` : ""};
  ${(props) =>
    props.value ? "color:black; text-decoration:underline;" : "color : #c2c2c2"}
  font-weight : 700;

  &:hover {
    cursor: pointer;
    font-weight: 700;
    color: black;
    text-decoration: underline;
  }
`;

export default TextButton;
