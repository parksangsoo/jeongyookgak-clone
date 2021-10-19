import React from "react";
import styled from "styled-components";

const SelectBox = (props) => {
  const optionData = [
    { id: 0, option: "얇게" },
    { id: 1, option: "중간" },
    { id: 2, option: "두껍게" },
  ];

  return (
    <Select>
      {optionData.map((d, idx) => {
        return(
        <Option value={idx} key={idx}>
          {d.option}
        </Option>
        );
      })}
    </Select>
  );
};

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
