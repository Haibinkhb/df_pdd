import ajax from './ajax'

//定义一个基础路径
const base_url = "http://127.0.0.1:3000";

//请求首页轮播图
export const get_homecarousel = ()=>ajax(base_url + "/api/homecarousel");

//请求首页导nav图
export const get_homenav = ()=>ajax(base_url + "/api/homenav");

//请求首页商品列表
export const get_goodslist = ()=>ajax(base_url + "/api/goodslist");

//请求推荐页商品列表
export const get_recommend_goods = (params)=>ajax(base_url + "/api/recommend",params);

//请求搜索页数据
export const get_search_data = ()=>ajax(base_url + "/api/search");

//获取手机短信验证码
export const get_phoneCode = (phone)=>ajax(base_url + "/api/getPhoneCode", {phone:phone})
