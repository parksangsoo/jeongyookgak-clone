import axios from "axios";

const instance = axios.create({
  // 기본적으로 우리가 바라볼 서버의 주소
  baseURL: "http://localhost:4000/",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
    authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

instance.interceptors.request.use(function (config) {
  const accessToken = document.cookie.split("=")[1];
  config.headers.common["X-AUTH-TOKEN"] = `${accessToken}`;
  return config;
});

export const apis = {
  // 게시물 불러오기
  getMeat: () => instance.get("/meats"),
  addMeat: (contents) => instance.post("/meats", contents),
  delMeat: (meat_id) => instance.delete(`/meats/${meat_id}`),
};

// @mida_작업__axios api__
export const apiMida = {
  get: (url = "/") => instance.get(`${url}`),
  post: (url = "/", body = {}) => instance.post(`${url}`, body),
};
