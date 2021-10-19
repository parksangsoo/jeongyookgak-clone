import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";
import { apis } from '../../lib/axios';
import { actionCreators as imageActions } from './image';
import { main_item01 } from "../../image";


const SET_MEAT = "SET_MEAT";
const ADD_MEAT = "ADD_MEAT";
const SET_DETAIL = "SET_DETAIL";
const data = [
  {
    id: 1,
    src: main_item01,
    title: "초신선 돼지 삼겹살 구이용",
    text: "기준가 16,800원/600g",
    category: 1,
    defaultprice: "16800원",
    detailprice: "16800원",
    sumImgUrl: "1111",
    detailImgUrl: "1111",
  },
];
const setMeat = createAction(SET_MEAT, (meat_list) => ({meat_list}))
const addMeat = createAction(ADD_MEAT, (meat_info) => ({meat_info}))
const setDetail = createAction(SET_DETAIL, (detail_info) => ({detail_info}))

const initialState = {
    list:[],
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

const getDetailMiddleware = (item_id) => {
  return (dispatch, getState, {history}) => {
    apis.getDetail(item_id).then((res)=>{
      const detail_info=res.data
      dispatch(setDetail(detail_info));
    }).catch((err) => {
      console.log(err);
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
        [SET_DETAIL] : (state, action) =>
        produce(state, (draft) => {
          draft.list=action.payload.detail_info;
        })
    },
    initialState
);

const actionCreators = {
  setDetail,
    setMeat,
    getMeatMiddleware,
    addMeat,
    addMeatMiddleware,
    getDetailMiddleware,
  };
  
export { actionCreators };

