import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";
import { apis } from '../../lib/axios';

const SET_MEAT = "SET_MEAT";


const setMeat = createAction(SET_MEAT, (meat_list) => ({meat_list}))


const initialState = {
    list:[]
}

// middleware
const getMeatMiddleware = () => {
    return (dispatch, getState, {history}) => {
      apis
        .getMeat()
        .then((res)=> {
          const meat_list = res.data;
          dispatch(setMeat(meat_list))
      }).catch()
    };
  };


export default handleActions(
    {
        [SET_MEAT]: (state, action) =>
        produce(state, (draft) => {
          draft.list = action.payload.meat_list
          console.log(draft.list)
        })
    },
    initialState
);

const actionCreators = {
    setMeat,
    getMeatMiddleware,
  };
  
export { actionCreators };

