import React from "react";
import styled from "styled-components";

const SelectBox = (props) => {
  const {_onChange,_value} = props
  const category = props.category;
  let optionData = [];
  if (category === "pork") {
    optionData = [
      { id: 0, option: "보통(16mm)" },
      { id: 1, option: "얇게(11mm)" },
      { id: 2, option: "두껍(24mm)" },
    ];
  } else if (category === "beef") {
    optionData = [
      { id: 0, option: "구이용(15mm)" },
      { id: 1, option: "스테이크용(30mm)" },
    ];
  } else {
    optionData = [{ id: 0, option: "보통" }];
  }

  return (
    <Select onChange={_onChange} value={_value}>
      {optionData.map((d, idx) => {
        return (
          <Option value={d.option} key={idx}>
            {d.option}
          </Option>
        );
      })}
    </Select>
  );
};
SelectBox.defaultProps = {
  _onChange:()=>{},
  _value:"",
}
const Select = styled.select`
  width: 317px;
  height: 50px;
  background-color: #1c1c1c;
  font-size: 16px;
  text-align: center;
  color: #fff;
  &:hover {
    cursor: pointer;
  }
`;
const Option = styled.option`
  background-color: #1c1c1c;
`;

export default SelectBox;
