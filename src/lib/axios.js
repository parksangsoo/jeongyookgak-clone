import axios from "axios";

const instance = axios.create({
  baseURL: "http://52.79.248.107:8080/",
});
instance.interceptors.request.use((config) => {
  config.headers["Content-Type"] = "application/json; charset=utf-8";
  config.headers["X-Auth-Token"] = `${sessionStorage.getItem("token")}`;
  return config;
});

export const apis = {
  // 게시물 불러오기
  getMeat: () => instance.get("/item/all"),
  addMeat: (contents) => instance.post("/item", contents),
  delMeat: (item_id) => instance.get(`/item/delete/${item_id}`),
  editMeat: (item_id, contents) =>
    instance.put(`/item/update/${item_id}`, contents),
  //이미지 업로드
  addImage: (imagedata) => instance.post("/image", imagedata),
  //상세페이지
  getDetail: (item_id) => instance.get(`/item/detail/${item_id}`),
  //댓글
  addComment: (item_id, content) =>
    instance.post(`api/addcomment/${item_id}`, content, {
      headers: {
        "X-Auth-Token": `${sessionStorage.getItem("token")}`,
      },
    }),
  getComment: (item_id) => instance.get(`api/comment/${item_id}`),
  deleteComment: (comment_id) =>
    instance.get(`api/deletecomment/${comment_id}`),
  editComment: (comment_id, content) =>
    instance.put(`api/updatecomment/${comment_id}`, content),
};

// @mida_작업__axios api__
export const apiMida = {
  get: (url = "/") => instance.get(`${url}`),
  post: (url = "/", body = {}) => instance.post(`${url}`, body),
};
