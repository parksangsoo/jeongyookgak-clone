// @mida_작업__cart__
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apiMida } from "../../lib/axios";

const GET_CART_LIST = "CART/GET_CART_LIST";
const POST_CART = "CART/POST_CART";
const DELETE_CART = "CART/DELETE_CART";
const COUNT_CART = "CART/COUNT_CART";

const getCartList = createAction(GET_CART_LIST, (cart_list) => ({ cart_list }));
const postCart = createAction(POST_CART, (item) => ({ item }));
const deleteCart = createAction(DELETE_CART, (basketId) => ({ basketId }));
const countCart = createAction(COUNT_CART, (cart_list) => ({ cart_list }));
const initialState = {
  cart_list: [],
  cart_count: 0,
};

export default handleActions(
  {
    [GET_CART_LIST]: (state, action) =>
      produce(state, (draft) => {
        draft.cart_list = action.payload.cart_list;
      }),
    [POST_CART]: (state, action) =>
      produce(state, (draft) => {
        draft.cart_list.push(action.payload.item);
        draft.cart_count += 1;
      }),
  },
  initialState
);

const actionCreators = {
  getCartList,
  countCart,
  postCart,
};

export { actionCreators };
