import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const {
    is_flex,
    width,
    height,
    margin,
    padding,
    bg,
    children,
    center,
    _onClick,
    is_grid,
    box_shadow,
    hover,
    align_items,
    border,
  } = props;

  const styles = {
    is_flex: is_flex,
    width: width,
    height: height,
    margin: margin,
    padding: padding,
    bg: bg,
    center: center,
    is_grid: is_grid,
    box_shadow: box_shadow,
    hover: hover,
    align_items: align_items,
    border:border,
  };

  return (
    <React.Fragment>
      {props.hover ? (
        <GridHoverBox {...styles} onClick={_onClick}>
          {children}{" "}
        </GridHoverBox>
      ) : (
        <GridBox {...styles} onClick={_onClick}>
          {children}{" "}
        </GridBox>
      )}
    </React.Fragment>
  );
};

Grid.defaultProps = {
  width: "100%",
  children: null,
  is_flex: false,
  padding: false,
  margin: false,
  bg: false,
  center: false,
  is_grid: false,
  box_shadow: false,
  hover: false,
  _onClick: () => {},
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => (props.height ? props.height : "100%")};
  box-sizing: border-box;
  ${(props) => (props.padding ? `padding:${props.padding};` : "")}
  ${(props) => (props.margin ? `margin:${props.margin};` : "")}
    ${(props) => (props.bg ? `background-color:${props.bg};` : "")}
    ${(props) =>
    props.is_flex
      ? `display: flex; ${
          props.align_items
            ? `align-items: ${props.align_items}`
            : "align-items:center"
        }; justify-content: space-between;`
      : ""}
   
    ${(props) => (props.center ? `text-align: center` : "")}
    ${(props) =>
    props.is_grid
      ? `display: grid; grid-template-columns: repeat(3, 1fr);`
      : ""}
    ${(props) => (props.box_shadow ? `box-shadow:${props.box_shadow};` : "")}
    ${(props) => (props.border?`border:${props.border}` : "")};
`;

const GridHoverBox = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  box-sizing: border-box;
  ${(props) => (props.padding ? `padding:${props.padding};` : "")}
  ${(props) => (props.margin ? `margin:${props.margin};` : "")}
    ${(props) => (props.bg ? `background-color:${props.bg};` : "")}
    ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: space-between;`
      : ""}
    ${(props) => (props.center ? `text-align: center` : "")}
    ${(props) =>
    props.is_grid
      ? `display: grid; grid-template-columns: repeat(3, 1fr);`
      : ""}
    ${(props) => (props.box_shadow ? `box-shadow:${props.box_shadow};` : "")}
    &:hover {
    transform: scale(1.1);
    transition: transform 0.5s;
  }
`;

export default Grid;
