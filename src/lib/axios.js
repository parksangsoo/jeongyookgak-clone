import axios from 'axios';

const instance = axios.create({
  // 기본적으로 우리가 바라볼 서버의 주소
  baseURL: 'http://localhost:4000/',
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json',
    authorization: `Bearer ${localStorage.getItem("token")}`
  },
});

instance.interceptors.request.use(function (config) {
	const accessToken = document.cookie.split('=')[1];
	config.headers.common['X-AUTH-TOKEN'] = `${accessToken}`;
	return config;
});

export const apis = {
  
  getMeat: () => instance.get('/meats'),
  addMeat: (contents) => instance.post('/meats',contents),
  //상세페이지
  getDetail: (item_id) => instance.get(`/item/detail/${item_id}`),
  //댓글
  addComment:(item_id, content)=> instance.post(`api/addcomment/${item_id}`,content),
  getComment:(item_id) => instance.get(`api/comment/${item_id}`),
};