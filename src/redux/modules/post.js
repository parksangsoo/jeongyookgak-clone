import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";
import { apis } from '../../lib/axios';
import { actionCreators as imageActions } from './image';

const SET_MEAT = "SET_MEAT";
const ADD_MEAT = "ADD_MEAT"

const setMeat = createAction(SET_MEAT, (meat_list) => ({meat_list}))
const addMeat = createAction(ADD_MEAT, (meat_info) => ({meat_info}))

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
      }).catch((err) => {
        console.log(err)
      })
    };
  };

const addMeatMiddleware = (meat) => {
    return (dispatch, getState, {history}) => {
      apis.addMeat(meat)
      .then(()=>{
        dispatch(addMeat(meat))
        history.push('/meat');
        dispatch(imageActions.setPreview(null));
      }).catch((err) => {
        console.log(err)
      })
    }
}

export default handleActions(
    {
        [SET_MEAT]: (state, action) =>
        produce(state, (draft) => {
          draft.list = action.payload.meat_list
          console.log(draft.list)
        }),
        [ADD_MEAT]: (state, action) => 
        produce(state, (draft) => {
          draft.list.unshift(action.payload.meat_info)
        })
    },
    initialState
);

const actionCreators = {
    setMeat,
    getMeatMiddleware,
    addMeat,
    addMeatMiddleware
  };
  
export { actionCreators };

