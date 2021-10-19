import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../lib/axios";

const ADD_COMMENT = "ADD_COMMENT";
const GET_COMMENT = "GET_COMMENT";

const addComment = createAction(ADD_COMMENT, (comment) => ({ comment }));
const getComment = createAction(GET_COMMENT, (comment) => ({ comment }));

const initialState = {
  list: [],
};

const addCommentMiddleware = (item_id,content) => {
  return (dispatch, getState, { history }) => {
    apis.addComment(item_id,{ content }).then((res) => {
      dispatch(addComment(res.data));
    });
  };
};

const getCommentMiddleware = (item_id) => {
  return (dispatch, getState, { history }) => {
      apis.getComment(item_id).then((res)=> {
          getComment(res.data);
      })
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
  },
  initialState
);

const actionCreators = {
  addComment,
  addCommentMiddleware,
  getComment,
  getCommentMiddleware,
};

export { actionCreators };
