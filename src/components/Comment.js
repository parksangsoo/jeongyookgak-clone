import React, { useState } from "react";
import { Text, Grid, Input,FlexGrid } from "../elements/index";
import styled from "styled-components";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";

const Comment = (props) => {
  const [edit_open, setEditOpen] = useState(false);
  const [content, setContent] = useState(props.content);
  const dispatch = useDispatch();
  const loginId = sessionStorage.getItem("username");
  let _createAt = props.createdAt;
  const date = new Date(_createAt);
  let createAt = date.toDateString();
  const onChange =(e) => {
    setContent(e.target.value);
  }
  const edit = () => {
    if (edit_open === false) {
      setEditOpen(true);
    } else {
      setEditOpen(false);
    }
  };
  const editComment=() => {
    dispatch(commentActions.editCommentMiddleware(props.id, content));
    setEditOpen(false);
  }
  const delComment = () => {
    dispatch(commentActions.deleteCommentMiddleware(props.id));
  };
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
        <Grid width="auto">
          {loginId===props.writer?<><EditIcon style={{ marginRight: "20px" }} onClick={edit} />
          <HighlightOffIcon
            style={{ marginRight: "20px" }}
            onClick={delComment}
          /></> : null}
          
        </Grid>
      </Grid>
      <Grid
        width="920px"
        height="150px"
        bg="#f8f8f8"
        padding="15px"
        margin="15px 0px 0px 0px"
      >
        {edit_open === false ? (
          <Text size="15px" bold>
            {props.content}
          </Text>
        ) : (
          <Input
            multiLine
            width="900"
            placeholder="댓글을 입력해주세요."
            _rows={6}
            _onChange={onChange}
            value={content}
          ></Input>
        )}
      </Grid>
      <FlexGrid height="auto" is_flex justify ="flex-end">
        <Text
          align="right"
          size="17px"
          color="#7a7a7a"
          margin="10px 20px 0px 0px"
          bold
        >
          {createAt}
        </Text>
        {edit_open && <Button onClick={editComment}>수정완료</Button>}
      </FlexGrid>
    </Grid>
  );
};

const Button = styled.button`
  background-color: #c1c1c1;
  width: 100px;
  height: 30px;
  font-size: 15px;
  color: #fff;
  margin: 0px;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

export default Comment;
