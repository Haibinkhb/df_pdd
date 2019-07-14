import Vue from "vue"
import{
HOME_CAROUSEL,
HOME_NAV,
HOME_GOODSLIST,
RECOMMEND_GOODS,
SEARCH_DATA,
SYNC_USER_INFO,
GET_CART_DATA,
CHECKED_ALL,
IS_CHECKED,

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
    [GET_CART_DATA](state,{results}){
        state.cart_data = results;
    },
    //全选购物车商品
    [CHECKED_ALL](state,{isAllChecked}){
        state.cart_data.forEach((goods,index)=>{
            if(goods.isChecked){
        
                goods.isChecked = !isAllChecked;
            }else{
                Vue.set(goods,"isChecked",!isAllChecked)
            }
        })
    },
    //购物车单个商品选中
    [IS_CHECKED](state,{index}){
        let goods = state.cart_data;
        for(let i=0; i<goods.length;i++){
            if(goods[index].isChecked === undefined){
                console.log(goods[index])
                Vue.set(goods[index] ,"isChecked",true);
            }else if(goods[index].isChecked === false || goods[index].isChecked === true){
                goods[index].isChecked = !goods[index].isChecked
            }else{
                return
            }
        }
    },
   
}
