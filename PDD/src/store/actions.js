import {
    HOME_CAROUSEL,
    HOME_NAV,
    HOME_GOODSLIST,
    RECOMMEND_GOODS,
}from "./mutation-types"


import { get_homecarousel,get_homenav, get_goodslist,get_recommend_goods} from "../api/index"
// import {} from "../api/index"
// import {} from "../api/index"

export default {
    //获取首页轮播图(异步)
    async req_homecarousel({ commit }) {
        let data = await get_homecarousel();
        commit(HOME_CAROUSEL,{homecarousel:data.homecarousel})
    },
    //获取首页NAV图
    async req_homenav({commit}){
        let data = await get_homenav();
        commit(HOME_NAV,{homenav:data.homenav})
    },
    //获取首页商品列表
    async req_goodslist({commit}){
        let data = await get_goodslist();
        commit(HOME_GOODSLIST,{home_goodslist:data.results})
    },
    //获取推荐页商品列表
    async req_recommend_goods({commit},params){
        let data = await get_recommend_goods(params);
        commit(RECOMMEND_GOODS,{recommend_goods:data.results})
    },
}