import React from "react";
import { Text, Grid } from "../elements/index";
import styled from "styled-components";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {useDispatch} from "react-redux";
import {actionCreators as commentActions} from "../redux/modules/comment";
const Comment = (props) => {
  const dispatch = useDispatch();
  const delComment =() => {
    dispatch(commentActions.deleteComment(props.comment_id))
  }
  return (
    <Grid
      margin="20px auto"
      height="248px"
      padding="20px"
      border="solid 1px #e0e0e0"
    >
      <Grid height="auto" is_flex>
      <Text size="20px" bold>
        {props.writer}
      </Text>
      <HighlightOffIcon onClick={delComment}/>
      </Grid>
      
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
      <Text
        align="right"
        size="17px"
        color="#7a7a7a"
        margin="10px 0px 0px 0px"
        bold
      >
        {props.createAt}
      </Text>
    </Grid>
  );
};

const Button = styled.button`
  background-color : red;
  margin : 0px;
  border : 0px;
`;

export default Comment;
