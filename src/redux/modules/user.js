// @mida_작업__user__
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apiMida } from "../../lib/axios";

//action type
const SET_USER = "user/SET_USER";

//action creator
const setUser = createAction(SET_USER, (user) => ({ user }));

//initialState
const initialState = {
  user: null,
  is_token: null,
  is_login: false,
};

export const signupFB = (user) => {
  return async (dispatch, getState, { history }) => {
    try {
      const res = await apiMida.post(`user/signup`, user);
      console.log("signup res =========== ", res);
    } catch (e) {
      console.log("error :::::: ", e.response.data);
    }
  };
};

export const loginFB = (user) => {
  return async (dispatch, getState, { history }) => {
    try {
      const res = await apiMida.post(`user/login`, user);
      const token = res.data[1].token;
      if (token) {
        sessionStorage.setItem("token", `${token}`);
      }
      history.push("/");
    } catch (e) {
      console.log("error :::::: ", e.response.data);
    }
  };
};

export default handleActions({}, initialState);

const actionCreators = {
  loginFB,
  signupFB,
};

export { actionCreators };
