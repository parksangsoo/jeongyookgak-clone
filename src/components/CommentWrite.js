import React from "react";
import styled from "styled-components";
import { Grid, Button, Input } from "../elements/index";
import { useDispatch } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";
const CommentWrite = (props) => {
  const [content, setContent] = React.useState("");
  const dispatch = useDispatch();
  const onChange = (e) => {
    setContent(e.target.value);
  };
  const resist = () => {
    // dispatch();
    if (content) {
      dispatch(
        commentActions.addCommentMiddleware(props.item_id, {content})
      );
      setContent("");
      window.alert("리뷰가 작성됐습니다.");
    } else {
      window.alert("리뷰를 입력해주세요");
    }
  };

  return (
    <Grid margin="39px auto" width="980px" height="270px">
      <ContentGrid>
        <Input
          multiLine
          width="900"
          placeholder="리뷰를 입력해주세요."
          _onChange={onChange}
          value={content}
        ></Input>
      </ContentGrid>
      <ResistGrid>
        <ResistButton onClick={resist}>등록</ResistButton>
      </ResistGrid>
    </Grid>
  );
};

const ContentGrid = styled.div`
  margin: 0px;
  height: 220px;
  padding: 20px;
  border: solid 1px #e0e0e0;
`;

const ResistGrid = styled.div`
  width: 980px;
  height: 30px;
  border: solid #8f8f8f 0px;
  border-bottom: 1px;
  align-items: center;
  border: solid #e0e0e0;
  border-width: 0px 1px 1px 1px;
`;
const ResistButton = styled.button`
  width: 100px;
  background-color: #c1c1c1;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  height: 30px;
  border: none;
  margin: 0px;
  float: right;
  &:hover{
    cursor: pointer;
  }
`;

export default CommentWrite;
