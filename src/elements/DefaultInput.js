import React from "react";
import styled from "styled-components";

const DefaultInput = (props) => {
  const {
    width,
    flex,
    padding,
    color,
    fontSize,
    border,
    _onSubmit,
    _onChange,
    name,
    type,
    value,
    placeholder,
  } = props;

  const styles = {
    width: width,
    flex: flex,
    padding: padding,
    color: color,
    fontSize: fontSize,
    border: border,
  };
  return (
    <Input
      {...styles}
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={_onChange}
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          _onSubmit(e);
        }
      }}
    />
  );
};

DefaultInput.defaultProps = {
  width: "auto",
  flex: false,
  padding: "8px",
  color: "#343a40",
  fontSize: "13px",
  border: "1px solid #e1dedf",
  _onSubmit: () => {},
  _onChange: () => {},
};

const Input = styled.input`
  width: ${(props) => (props.width ? props.width : "auto")};
  padding: ${(props) => (props.padding ? props.padding : "8px")};
  flex: ${(props) => (props.flex ? "1" : "")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "13px")};
  color: ${(props) => (props.color ? props.color : "#343a40")};
  border: ${(props) => (props.border ? props.border : "1px solid #e1dedf")};
`;

export default DefaultInput;
