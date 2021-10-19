import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../lib/axios";

const ADD_COMMENT = "ADD_COMMENT";
const GET_COMMENT = "GET_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";

const addComment = createAction(ADD_COMMENT, (comment) => ({ comment }));
const getComment = createAction(GET_COMMENT, (comment) => ({ comment }));
const deleteComment = createAction(DELETE_COMMENT, (comment_id) => comment_id);

const initialState = {
  list: [],
};

const addCommentMiddleware = (item_id, content) => {
  return (dispatch, getState, { history }) => {
    apis.addComment(item_id, { content }).then((res) => {
      dispatch(addComment(res.data));
    });
  };
};

const getCommentMiddleware = (item_id) => {
  return (dispatch, getState, { history }) => {
    apis.getComment(item_id).then((res) => {
      getComment(res.data);
    });
  };
};

const deleteCommentMiddleware = (comment_id) => {
  return (dispatch, getState, { history }) => {
    apis.deleteComment(comment_id).then(() => {
      dispatch(deleteComment(comment_id));
    });
  };
};

export default handleActions(
  {
    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.comment);
      }),
    [GET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.comment;
      }),
    [DELETE_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        
        const idx = draft.list.findIndex(
          (c) => c.id === action.payload.comment_id
        );
        console.log(idx);
        draft.list.splice(idx, 1);
      }),
  },
  initialState
);

const actionCreators = {
  addComment,
  addCommentMiddleware,
  getComment,
  getCommentMiddleware,
  deleteComment,
  deleteCommentMiddleware,
};

export { actionCreators };
