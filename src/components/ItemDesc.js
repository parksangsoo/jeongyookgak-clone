import React from 'react';
import {Grid, Image} from "../elements/index";
const ItemDesc = (props) => {
    return (
        <Grid height="auto">
            <Image src={props.src}/>
      </Grid>
    );
};

export default ItemDesc;