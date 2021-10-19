import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid } from "../elements/index";
import Comment from "./Comment";
import { actionCreators as commentActions } from "../redux/modules/comment";
const CommentList = (props) => {
  const dispatch = useDispatch();
  const comment = useSelector((state) => state.comment.list);
  console.log(comment);
  const data = [
    {
      id: 1,
      writer: "작성자1",
      content: "내용1",
      createAt: "2021-01-01",
    },
    {
      id: 2,
      writer: "작성자2",
      content: "내용2",
      createAt: "2021-01-02",
    },
  ];

  React.useEffect(() => {
    dispatch(commentActions.getComment(data));
  }, []);

  if (comment) {
    return (
      <Grid margin="39px auto" width="980px">
        {comment.map((d, idx) => {
          return <Comment {...d} key={d.id} />;
        })}
      </Grid>
    );
  }
  return null;
};

export default CommentList;
