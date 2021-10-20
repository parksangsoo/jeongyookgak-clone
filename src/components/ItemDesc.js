import React from 'react';
import {Grid, Image} from "../elements/index";
const ItemDesc = (props) => {
    return (
        <Grid height="auto">
            <Image src={props.src} type="default"/>
      </Grid>
    );
};

export default ItemDesc;