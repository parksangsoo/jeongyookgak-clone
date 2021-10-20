import axios from "axios";

const instance = axios.create({
  baseURL: "http://52.79.248.107:8080/",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
    "X-Auth-Token": `${sessionStorage.getItem("token")}`,
    // authorization: `Bearer ${sessionStorage.getItem("token")}`,
  },
});

// instance.interceptors.request.use(function (config) {
//   const accessToken = document.cookie.split("=")[1];
//   config.headers.common["X-AUTH-TOKEN"] = `${accessToken}`;
//   return config;
// });

export const apis = {
  // 게시물 불러오기
  getMeat: () => instance.get("/item/all"),
  addMeat: (contents) => instance.post("/item", contents),
  delMeat: (item_id) => instance.get(`/item/delete/${item_id}`),
  editMeat: (item_id, contents) => instance.put(`/item/update/${item_id}`, contents),
  //이미지 업로드
  addImage: (imagedata) => instance.post("/image",imagedata),
  //상세페이지
  getDetail: (item_id) => instance.get(`/item/detail/${item_id}`),
  //댓글
  addComment:(item_id, content)=> instance.post(`api/addcomment/${item_id}`,content),
  getComment:(item_id) => instance.get(`api/comment/${item_id}`),
  deleteComment: (comment_id) => instance.get(`api/deletecomment/${comment_id}`),
  editComment : (comment_id, content)=> instance.put(`api/updatecomment/${comment_id}`,content),
};

// @mida_작업__axios api__
export const apiMida = {
  get: (url = "/") => instance.get(`${url}`),
  post: (url = "/", body = {}) => instance.post(`${url}`, body),
};
