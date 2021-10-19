import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";
import { apis } from '../../lib/axios';
import { actionCreators as imageActions } from './image';

const SET_MEAT = "SET_MEAT";
const ADD_MEAT = "ADD_MEAT";
const DEL_MEAT = "DEL_MEAT";

const setMeat = createAction(SET_MEAT, (meat_list) => ({meat_list}))
const addMeat = createAction(ADD_MEAT, (meat_info) => ({meat_info}))
const delMeat = createAction(DEL_MEAT, (meat_id) => ({meat_id}))

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

const delMeatMIddleware = (meat_id) => {
  return(dispatch, getState, {history}) => {
    apis.delMeat(meat_id).then(()=>{
      dispatch(delMeat(meat_id));
      window.alert("삭제 완료했습니다.");
      history.replace("/");
    }).catch((err)=>{
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
        }),
        [DEL_MEAT]: (state, action) => 
        produce(state, (draft) => {
          let idx = draft.list.findIndex((p) => p.id.toString() === action.payload.meat_id);
          if(idx !== -1){
            draft.list.splice(idx, 1);
          }
        })

        
    },
    initialState
);

const actionCreators = {
    setMeat,
    getMeatMiddleware,
    addMeat,
    addMeatMiddleware,
    delMeat,
    delMeatMIddleware
  };
  
export { actionCreators };

