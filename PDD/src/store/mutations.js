import{
HOME_CAROUSEL,
HOME_NAV,
HOME_GOODSLIST,
RECOMMEND_GOODS,
SEARCH_DATA,
SYNC_USER_INFO,
ADD_GOODS_TO_CART,
} from "./mutation-types"

export default {
    [HOME_CAROUSEL](state,{homecarousel}){
        state.homecarousel = homecarousel;
    },
    [HOME_NAV](state,{homenav}){
        state.homenav = homenav;
    },
    [HOME_GOODSLIST](state,{home_goodslist}){
        state.home_goodslist = home_goodslist;
    },
    [RECOMMEND_GOODS](state,{recommend_goods}){
        state.recommend_goods = recommend_goods;
    },
    [SEARCH_DATA](state,{search_data}){
        state.search_data = search_data;
    },
    [SYNC_USER_INFO](state,{userInfo}){
        state.userInfo = userInfo
    },
}