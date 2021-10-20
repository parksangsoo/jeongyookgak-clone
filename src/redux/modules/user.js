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
  is_login: false,
};

export const signupFB = (user) => {
  return async (dispatch, getState, { history }) => {
    try {
      await apiMida.post(`user/signup`, user);
      alert("회원가입에 성공하셨습니다.");
      history.push("/login");
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
      const userName = res.data[0].username;
      if (token) {
        sessionStorage.setItem("token", `${token}`);
        sessionStorage.setItem("username", `${userName}`);
      }
      dispatch(setUser(userName));
      history.push("/");
    } catch (e) {
      console.log("error :::::: ", e.response.data);
    }
  };
};
export const logOutFB = () => {
  return (dispatch, getState, { history }) => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("username");
    dispatch(setUser(null));
    alert("로그아웃 되었습니다.");
    history.replace("/");
  };
};

// 로그인 여부 체크
export const loginCheck = () => {
  return (dispatch) => {
    const username = sessionStorage.getItem("username");
    dispatch(setUser(username));
  };
};

export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = action.payload.user !== null ? true : false;
      }),
  },
  initialState
);

const actionCreators = {
  loginFB,
  signupFB,
  logOutFB,
  loginCheck,
};

export { actionCreators };
