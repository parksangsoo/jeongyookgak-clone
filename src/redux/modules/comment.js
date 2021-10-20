import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../lib/axios";

const ADD_COMMENT = "ADD_COMMENT";
const GET_COMMENT = "GET_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";
const EDIT_COMMENT = "EDIT_COMMENT";

const addComment = createAction(ADD_COMMENT, (comment) => ({ comment }));
const getComment = createAction(GET_COMMENT, (comment) => ({ comment }));
const deleteComment = createAction(DELETE_COMMENT, (comment_id) => comment_id);
const editComment = createAction(EDIT_COMMENT, (comment_id,content)=>(comment_id,{content}));

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

const editCommentMiddleware = (comment_id, content) => {
  return (dispatch, getState, {history}) => {
    apis.editComment(comment_id, content).then(()=>{
      dispatch(editComment(comment_id,content));
    })
  }
}

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
          (c) => c.comment_id === action.payload.comment_id
        );
        console.log(idx);
        draft.list.splice(idx, 1);
      }),
    [EDIT_COMMENT] : (state, action) =>
      produce(state, (draft)=> {
        const idx = draft.list.findIndex((c)=> c.comment_id === action.payload.comment_id);
        console.log(action.payload.content);
        // draft.list[idx] = {}
      })
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
  editComment,
  editCommentMiddleware,
};

export { actionCreators };
