import React from "react";
import styled from "styled-components";

const Link = (props) => {
  const { margin, fontSize, line, children } = props;
  const styles = {
    margin: margin,
    fontSize: fontSize,
    line: line,
  };
  return <LinkButton {...styles}>{children}</LinkButton>;
};

Link.defaultProps = {
  margin: "0 0 0 14px",
  fontSize: "14px",
  line: false,
};

const LinkButton = styled.button`
  margin: ${(props) => (props.margin ? props.margin : "0 0 0 14px")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "14px")};
  color: #fff;
  border: none;
  background-color: transparent;
  &:hover {
    cursor: ${(props) => (!props.line ? "pointer" : "0")};
  }
`;

export default Link;
