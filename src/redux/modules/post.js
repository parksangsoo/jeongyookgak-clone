import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";
import { apis } from '../../lib/axios';

const SET_POST = "SET_POST";


const setPost = createAction(SET_POST, (post_list) => ({post_list}))


const initialState = {
    list:[]
}

// middleware
const getPostMiddleware = () => {
    return (dispatch, getState, {history}) => {
      
    };
  };


export default handleActions(
    {
        [SET_POST]: (state, action) =>
        produce(state, (draft) => {
          
        })
    },
    initialState
);

const actionCreators = {
    setPost,
    getPostMiddleware,
  };
  
export { actionCreators };

