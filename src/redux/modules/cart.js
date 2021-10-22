// @mida_작업__cart__
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apiMida } from "../../lib/axios";

const GET_CART_LIST = "CART/GET_CART_LIST";
const POST_CART = "CART/POST_CART";
const DELETE_CART = "CART/DELETE_CART";
const INCREASE_PRICE = "CART/INCREASEPRICE";
const DECREASE_PRICE = "CART/DECREASEPRICE";
const ADD_ITEM_COUNT = "CART/ADD_ITEM_COUNT"; // 장바구니 아이콘
const DELETE_ITEM_COUNT = "CART/DELETE_ITEM_COUNT";

const initialState = {
  cart_list: [],
  cart_count: 0, // 장바구니 아이콘
  total_price: 0,
  default_total_price: 0, // 수량을 늘리거나 줄일때 비교할 수 있는 총 가격
  price: 0,
  amount: 1, // 같은 상품 중복으로 장바구니 담았을때
};

const getCartList = createAction(GET_CART_LIST, (cart_list) => ({
  cart_list,
}));
const postCart = createAction(POST_CART, (item) => ({ item }));
const deleteCart = createAction(DELETE_CART, (basketId, price, count) => ({
  basketId,
  price,
  count,
}));
const increasePrice = createAction(INCREASE_PRICE, (type, price, basketId) => ({
  type,
  price,
  basketId,
}));
const decreasePrice = createAction(DECREASE_PRICE, (type, price, basketId) => ({
  type,
  price,
  basketId,
}));
const addItemCount = createAction(ADD_ITEM_COUNT, (count) => ({ count }));
const deleteItemCount = createAction(DELETE_ITEM_COUNT, (count) => ({ count }));

const getCartListFB = () => {
  return async (dispatch) => {
    try {
      const res = await apiMida.get(`basket`);
      dispatch(getCartList(res.data));
    } catch (e) {
      console.log("error ==== ", e.response);
    }
  };
};

const postCartFB = (item) => {
  return async (dispatch) => {
    try {
      console.log("fb item = ", item);
      await apiMida.post(`basket/insert`, item);
      dispatch(postCart(item));
      dispatch(addItemCount(1));
    } catch (e) {
      console.log("error ==== ", e.response);
    }
  };
};

const deleteCartFB = (basketId, price, count) => {
  return async (dispatch) => {
    await apiMida.post(`basket/delete`, { basketId });
    dispatch(deleteCart(basketId, price, count));
    dispatch(deleteItemCount(1));
    try {
    } catch (e) {
      console.log("error ==== ", e.response);
    }
  };
};

const increasePriceFB = (type, price, basketId) => {
  return (dispatch) => {
    dispatch(increasePrice(type, price, basketId));
  };
};

const decreasePriceFB = (type, price, basketId) => {
  return (dispatch) => {
    dispatch(decreasePrice(type, price, basketId));
  };
};

export default handleActions(
  {
    [GET_CART_LIST]: (state, action) =>
      produce(state, (draft) => {
        draft.cart_list = action.payload.cart_list;
        draft.cart_count = draft.cart_list.length;
      }),
    [POST_CART]: (state, action) =>
      produce(state, (draft) => {
        draft.cart_list.push(action.payload.item);
        draft.total_price += action.payload.item.defaultprice;
        draft.default_total_price += action.payload.item.defaultprice;
      }),
    [DELETE_CART]: (state, action) =>
      produce(state, (draft) => {
        draft.total_price =
          draft.cart_list.lenght !== 0
            ? draft.total_price - action.payload.price * action.payload.count
            : draft.total_price;
        draft.cart_list = draft.cart_list.filter((item) => {
          return item.basketId !== action.payload.basketId;
        });
      }),
    [INCREASE_PRICE]: (state, action) =>
      produce(state, (draft) => {
        if (action.payload.type) {
          draft.total_price += action.payload.price;
        }
        draft.price += action.payload.price;
        draft.amount += 1;
      }),
    [DECREASE_PRICE]: (state, action) =>
      produce(state, (draft) => {
        if (!action.payload.type) {
          const defaultTotal = draft.default_total_price;
          const newTotal = draft.total_price - action.payload.price;
          draft.total_price = newTotal < defaultTotal ? defaultTotal : newTotal;
        }
        draft.amount > 1 ? (draft.amount -= 1) : (draft.amount = 1);
      }),
    [ADD_ITEM_COUNT]: (state, action) =>
      produce(state, (draft) => {
        draft.cart_count += action.payload.count;
      }),
    [DELETE_ITEM_COUNT]: (state, action) =>
      produce(state, (draft) => {
        draft.cart_count -= action.payload.count;
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
  postCartFB,
  getCartListFB,
  deleteCartFB,
  increasePriceFB,
  decreasePriceFB,
};

export { actionCreators };
