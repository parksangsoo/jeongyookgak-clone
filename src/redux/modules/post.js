import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";
import { apis } from '../../lib/axios';
import { actionCreators as imageActions } from './image';
import { main_item01 } from "../../image";

const SET_MEAT = "SET_MEAT";
const ADD_MEAT = "ADD_MEAT";
const DEL_MEAT = "DEL_MEAT";
const EDIT_MEAT = "EDIT_MEAT";
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
const delMeat = createAction(DEL_MEAT, (meat_id) => ({meat_id}))
const editMeat = createAction(EDIT_MEAT,(meat_id,meat_info) => ({meat_id,meat_info}))

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
      const _file = getState().image.file;
      let formData = new FormData()
      formData.append("image", _file)
      apis.addImage(formData).then((res) => {

        meat.sumImgUrl = res.data.sumImgUrl
        console.log(meat)
        apis.addMeat(meat)
        .then(()=>{
          dispatch(addMeat(meat))
          history.push('/meat');
          dispatch(imageActions.setPreview(null));
        }).catch((err) => {
          console.log(err)
        })
      }).catch((err)=>{
        console.log(err)
        console.log("이미지 업로드가 안됨")
      })
    }
}

const getDetailMiddleware = (item_id) => {
  return (dispatch, getState, {history}) => {
    apis.getDetail(item_id).then((res)=>{
      const detail_info = res.data.data
      dispatch(setMeat([detail_info]));
    }).catch((err) => {
      console.log(err);
    })
  }
}

const delMeatMIddleware = (meat_id) => {
  return(dispatch, getState, {history}) => {
    apis.delMeat(meat_id).then(()=>{
      dispatch(delMeat(meat_id));
      history.replace("/");
    }).catch((err)=>{
      console.log(err)
    })
  }
}

const editMeatMIddleware = (meat_id,meat) => {
  return(dispatch, getState, {history}) => {
    apis.editMeat(meat_id,meat).then(()=> {
      dispatch(editMeat(meat_id,meat));
      history.replace("/meat");
    }).catch((err)=> {
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
        [DEL_MEAT]: (state, action) => 
        produce(state, (draft) => {
          let idx = draft.list.findIndex((p) => p.id.toString() === action.payload.meat_id);
          if(idx !== -1){
            draft.list.splice(idx, 1);
          }
        }),
        [EDIT_MEAT]: (state, action) => 
        produce(state, (draft)=> {
          let idx = draft.list.findIndex((p) => p.id.toString() === action.payload.meat_id);
          draft.list[idx] = {...draft.list[idx],...action.payload.meat_info}
        }),
    },
    initialState
);

const actionCreators = {
    setMeat,
    getMeatMiddleware,
    addMeat,
    addMeatMiddleware,
    delMeat,
    delMeatMIddleware,
    editMeat,
    editMeatMIddleware,
    getDetailMiddleware,
  };
  
export { actionCreators };

