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
      id: 1,
      src: main_item01,
      title: "초신선 돼지 삼겹살 구이용",
      text: "기준가 16,800원/600g",
    },
    {
      id: 2,
      src: main_item02,
      title: "초신선 돼지 삼겹살 구이용",
      text: "기준가 16,800원/600g",
    },
    {
      id: 3,
      src: main_item03,
      title: "초신선 돼지 삼겹살 구이용",
      text: "기준가 16,800원/600g",
    },
    {
      id: 4,
      src: main_item04,
      title: "초신선 돼지 삼겹살 구이용",
      text: "기준가 16,800원/600g",
    },
    {
      id: 5,
      src: main_item05,
      title: "초신선 돼지 삼겹살 구이용",
      text: "기준가 16,800원/600g",
    },
    {
      id: 6,
      src: main_item06,
      title: "초신선 돼지 삼겹살 구이용",
      text: "기준가 16,800원/600g",
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
