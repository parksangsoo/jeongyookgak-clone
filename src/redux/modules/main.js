// @mida_작업__main__
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apiMida } from "../../lib/axios";

const GET_BEST_LIST = "MAIN/GET_BEST_LIST";

const initialState = {
  best_list: [],
};

const getBestList = createAction(GET_BEST_LIST, (best_list) => ({ best_list }));

const getBestListFB = () => {
  return async (dispatch) => {
    try {
      const res = await apiMida.get("/");
      dispatch(getBestList(res.data));
    } catch (e) {
      console.log(e.response.data);
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
