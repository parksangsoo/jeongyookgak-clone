import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid } from "../elements/index";
import Comment from "./Comment";
import { actionCreators as commentActions } from "../redux/modules/comment";
const CommentList = (props) => {
  const dispatch = useDispatch();
  const comment = useSelector((state) => state.comment.list);
  console.log(comment);

  React.useEffect(() => {
    dispatch(commentActions.getCommentMiddleware(props.item_id));
  }, []);

  if (comment) {
    return (
      <Grid margin="39px auto" width="980px">
        {comment.map((d, idx) => {
          return <Comment {...d} key={d.comment_id} />;
        })}
      </Grid>
    );
  }
  return null;
};

export default CommentList;
