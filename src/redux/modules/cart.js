// @mida_작업__cart__
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apiMida } from "../../lib/axios";

const GET_CART_LIST = "CART/GET_CART_LIST";
const POST_CART = "CART/POST_CART";
const DELETE_CART = "CART/DELETE_CART";
const INCREASE_PRICE = "CART/INCREASEPRICE";
const DECREASE_PRICE = "CART/DECREASEPRICE";
const RESET_TOTAL_PRICE = "CART/RESET_TOTAL_PRICE";
const USER_ITEM_COUNT = "CART/USER_ITEM_COUNT";

const getCartList = createAction(GET_CART_LIST, (cart_list) => ({ cart_list }));
const postCart = createAction(POST_CART, (item) => ({ item }));
const deleteCart = createAction(DELETE_CART, (basketId, price, count) => ({
  basketId,
  price,
  count,
}));
const increasePrice = createAction(INCREASE_PRICE, (itemId, price, count) => ({
  itemId,
  price,
  count,
}));
const decreasePrice = createAction(DECREASE_PRICE, (itemId, price, count) => ({
  itemId,
  price,
  count,
}));
const reset_totalPrice = createAction(RESET_TOTAL_PRICE, (total) => ({
  total,
}));
const itemCount = createAction(USER_ITEM_COUNT, (count) => ({ count }));

const initialState = {
  cart_list: [],
  cart_count: 0, // 장바구니 아이콘
  total_price: 0,
  default_total_price: 0, // 수량을 늘리거나 줄일때 비교할 수 있는 총 가격
  item_count: 1, // 유저가 수량을 늘리거나 줄이거나 할 경우
  price: 0,
  item_id: 0,
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
        draft.total_price += action.payload.item.price;
        draft.default_total_price += action.payload.item.price;
      }),
    [DELETE_CART]: (state, action) =>
      produce(state, (draft) => {
        // 수량을 늘렸다가 삭제할 경우를 대비
        draft.total_price =
          draft.total_price - action.payload.price * action.payload.count;
        // 장바구니 아이콘의 숫자도 빼줘야 한다.
        draft.cart_count = draft.cart_count - 1;
        draft.cart_list = draft.cart_list.filter((item) => {
          return item.itemId !== action.payload.basketId;
        });
      }),
    [INCREASE_PRICE]: (state, action) =>
      produce(state, (draft) => {
        draft.total_price += action.payload.price;
        draft.item_count = action.payload.count;
        draft.price += action.payload.price;
      }),
    [DECREASE_PRICE]: (state, action) =>
      produce(state, (draft) => {
        const defaultTotal = draft.default_total_price;
        const newTotal = draft.total_price - action.payload.price;
        draft.item_count = action.payload.count;
        draft.total_price = newTotal < defaultTotal ? defaultTotal : newTotal;
      }),
    [RESET_TOTAL_PRICE]: (state, action) =>
      produce(state, (draft) => {
        draft.total_price =
          draft.cart_list.length === 0
            ? action.payload.total
            : draft.total_price;
      }),
    [USER_ITEM_COUNT]: (state, action) =>
      produce(state, (draft) => {
        console.log("gg");
      }),
  },
  initialState
);

const actionCreators = {
  getCartList,
  postCart,
  deleteCart,
  increasePrice,
  decreasePrice,
  reset_totalPrice,
};

export { actionCreators };
