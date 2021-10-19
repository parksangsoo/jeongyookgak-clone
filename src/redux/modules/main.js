// @mida_작업__main__
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apiMida } from "../../lib/axios";
import {
  main_item01,
  main_item02,
  main_item03,
  main_item04,
  main_item05,
  main_item06,
} from "../../image";

const GET_BEST_LIST = "MAIN/GET_BEST_LIST";

const initialState = {
  best_list: [
    {
      itemId: 1,
      sumImgUrl: main_item01,
      title: "초신선 돼지 삼겹살 구이용",
      text: "기준가 16,800원/600g",
      price: 10000,
      option: "보통(16mm)",
    },
    {
      itemId: 2,
      sumImgUrl: main_item02,
      title: "초신선 닭볶음탕",
      text: "기준가 6,300원/900g",
      price: 10000,
      option: "보통(16mm)",
    },
    {
      itemId: 3,
      sumImgUrl: main_item03,
      title: "초신선 등심 돈까스",
      text: "기준가 98,800원/770g",
      price: 10000,
      option: "보통(16mm)",
    },
    {
      itemId: 4,
      sumImgUrl: main_item04,
      title: "초신선 동물복지 무항생제 유정란",
      text: "기준가 6,600원/12구",
      price: 10000,
      option: "보통(16mm)",
    },
    {
      itemId: 5,
      sumImgUrl: main_item05,
      title: "초신선 무항생제 우유",
      text: "기준가 3,400원/900ml",
      price: 10000,
      option: "보통(16mm)",
    },
    {
      itemId: 6,
      sumImgUrl: main_item06,
      title: "초신선 무항생제 다짐육 한우 우둔",
      text: "기준가 13,200원/180g",
      price: 10000,
      option: "보통(16mm)",
    },
  ],
};

const getBestList = createAction(GET_BEST_LIST, (best_list) => ({ best_list }));

const getBestListFB = () => {
  return async (dispatch) => {
    try {
      const res = await apiMida.get("");
      console.log("res === ", res);
    } catch (e) {
      console.log(e.response);
    }
  };
};

export default handleActions(
  {
    [GET_BEST_LIST]: (state, action) =>
      produce(state, (draft) => {
        draft.best_list = action.payload.best_list;
      }),
  },
  initialState
);

const actionCreators = {
  getBestListFB,
};

export { actionCreators };
