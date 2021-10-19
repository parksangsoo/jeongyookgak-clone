// @mida_작업__cart__
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apiMida } from "../../lib/axios";

const GET_CART_LIST = "CART/GET_CART_LIST";
const POST_CART = "CART/POST_CART";
const DELETE_CART = "CART/DELETE_CART";
const INCREASEPRICE = "CART/INCREASEPRICE";
const DECREASEPRICE = "CART/DECREASEPRICE";

const getCartList = createAction(GET_CART_LIST, (cart_list) => ({ cart_list }));
const postCart = createAction(POST_CART, (item) => ({ item }));
const deleteCart = createAction(DELETE_CART, (basketId, price, count) => ({
  basketId,
  price,
  count,
}));
const increasePrice = createAction(INCREASEPRICE, (total) => ({ total }));
const decreasePrice = createAction(DECREASEPRICE, (total) => ({ total }));

const initialState = {
  cart_list: [],
  cart_count: 0, // 장바구니 아이콘
  total_price: 0,
  default_total_price: 0, // 수량을 늘리거나 줄일때 비교할 수 있는 총 가격
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
    [INCREASEPRICE]: (state, action) =>
      produce(state, (draft) => {
        draft.total_price += action.payload.total;
      }),
    [DECREASEPRICE]: (state, action) =>
      produce(state, (draft) => {
        const defaultTotal = draft.default_total_price;
        const newTotal = draft.total_price - action.payload.total;
        draft.total_price = newTotal < defaultTotal ? defaultTotal : newTotal;
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
};

export { actionCreators };
