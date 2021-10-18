import React from "react";
import { Text, Grid } from "../elements/index";
const Comment = (props) => {
  return (
    <Grid
      margin="20px auto"
      height="248px"
      padding="20px"
      border="solid 1px #e0e0e0"
    >
      <Text size="20px" bold>
        {props.name}
      </Text>
      <Grid
        width="920px"
        height="150px"
        bg="#f8f8f8"
        padding="15px"
        margin="15px 0px 0px 0px"
      >
        <Text size="15px" bold>
          {props.content}
        </Text>
      </Grid>
      <Text align="right" size="17px" color="#7a7a7a" margin="10px 0px 0px 0px" bold>
        {props.createAt}
      </Text>
    </Grid>
  );
};
export default Comment;
