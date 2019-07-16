import ajax from './ajax'
import { log } from 'util';

//定义一个基础路径
const base_url = "/api";



//请求首页轮播图
export const get_homecarousel = ()=>ajax("http://139.155.126.152:3000" + "/api/homecarousel");

//请求首页导nav图
export const get_homenav = ()=>ajax("http://139.155.126.152:3000" + "/api/homenav");

//请求首页商品列表
export const get_goodslist = ()=>ajax("http://139.155.126.152:3000" + "/api/goodslist");

//请求推荐页商品列表
export const get_recommend_goods = (params)=>ajax("http://139.155.126.152:3000" + "/api/recommend",params);

//请求搜索页数据
export const get_search_data = ()=>ajax("http://139.155.126.152:3000" + "/api/search");

//获取手机短信验证码
export const get_phoneCode = (phone)=>ajax("http://139.155.126.152:3000" + "/api/getPhoneCode", {phone:phone});

//手机验证码登录
export const phoneCodeLogin = (phone,code)=>ajax("http://139.155.126.152:3000" + "/api/phoneCodeLogin",{phone,code},'POST');

//用户名密码登录
export const userNameLogin = (userName,password,identifyingCode)=>ajax("http://139.155.126.152:3000" + "/api/userNameLogin",{userName,password,identifyingCode},'POST');

//获取用户信息
export const getUserInfo = ()=>ajax("http://139.155.126.152:3000" + "/api/getUserInfo");

//添加商品至购物车
export const addGoodsToCart = (goods)=>ajax("http://139.155.126.152:3000" + "/api/addGoodsToCart",goods,'POST');

//获取购物车商品数据
export const CartDate = ()=>ajax("http://139.155.126.152:3000" + "/api/getCartDate",'GET');

//删除购物车商品数据
export const deleteGoodsData = (goods)=>ajax("http://139.155.126.152:3000" + "/api/deleteGoods",goods,'POST');
