import React, { useState } from "react";
import { Text, Grid, Input } from "../elements/index";
import styled from "styled-components";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";

const Comment = (props) => {
  const [edit_open, setEditOpen] = useState(false);
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
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
    console.log("aaa");
    dispatch(commentActions.editComment(props.comment_id, {content}));
    setEditOpen(false);
    setContent("");
  }
  const delComment = () => {
    dispatch(commentActions.deleteComment(props.comment_id));
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
          <EditIcon style={{ marginRight: "20px" }} onClick={edit} />
          <HighlightOffIcon
            style={{ marginRight: "20px" }}
            onClick={delComment}
          />
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
      <Grid height="auto" is_flex>
        {edit_open && <Button onClick={editComment}>수정완료</Button>}

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
