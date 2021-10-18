import React from 'react';
import styled from "styled-components";

const Grid = (props) => {

    const {is_flex,width,height, margin, padding, bg, children, center, _onClick, is_grid, box_shadow} = props;

    const styles = {
        is_flex: is_flex,
        width: width,
        margin: margin,
        height: height,
        padding: padding,
        bg: bg,
        center: center,
        is_grid: is_grid,
        box_shadow: box_shadow,
    }

    return (
        <React.Fragment>
            <GridBox {...styles} onClick={_onClick}>{children} </GridBox>
        </React.Fragment>
    );
};

Grid.defaultProps = {
    width: "100%",
    children: null,
    height: false,
    is_flex: false,
    padding: false,
    margin: false,
    bg: false,
    center: false,
    is_grid: false,
    box_shadow: false,
    hover: false,
    _onClick: () => {}
}

const GridBox = styled.div`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    box-sizing: border-box;
    ${(props) => (props.padding?`padding:${props.padding};`:"")}
    ${(props) => (props.margin?`margin:${props.margin};`:"")}
    ${(props) =>(props.bg ? `background-color:${props.bg};`:"")}
    ${(props) => (props.is_flex?`display: flex; align-items: center; justify-content: center;`:"")}
    ${(props) => props.center?`text-align: center` :""}
    ${(props) => props.is_grid?`display: grid; grid-template-columns: repeat(3, 1fr); ` : ""}
    ${(props) => (props.box_shadow?`box-shadow:${props.box_shadow};`:"")}
`;

export default Grid;
