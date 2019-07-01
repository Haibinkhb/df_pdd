<template>
  <div class="recommend">
    <ul class="recommend_goods" v-if="recommend_goods">
      
      <li class="recommend_goods_list" v-for="goods in recommend_goods" :key="goods.goods_id">
        <div class="goods">
          <div class="goods_img">
            <img :src="goods.hd_thumb_url">
          </div>
          <div class="goods_name">
            <p>{{goods.goods_name}}</p>
          </div>
          <div class="goods_tags">
            <div class="tag_text">退货无忧</div>
            <div class="tag_text"></div>
          </div>
          <div class="goods_bottom">
            <span class="goods_price_logo">￥</span>
            <div class="goods_price">
              {{goods.price|filterPrice}}
            </div>
            <div class="sales_tip">{{goods.sales_tip}}</div>
            <div class="find_button">
              <button>发现 > </button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import $ from "jquery";//引入jquery...
export default {
  data() {
    return {
      offset:"",//数据请求条件（从第几行开始）
      count:"",//数据请求条件（加载多少条）
      params:{},//数据请求条件对像（传给函数）
      goods_list_height:"",//当前页面高度
    };
  },
  computed: {
    ...mapState(["recommend_goods"]),
  },
  methods:{
    param(){
      return this.params = {offset:this.offset,count:this.count}
    },
    //获取当前内容高度
    getGoodsHeight(){
      this.goods_list_height = $(".recommend_goods").height();
    },
  //移动端事件监听
    bindEvent() {
      this.$el.addEventListener("touchstart", this.TouchStart);
      this.$el.addEventListener("touchmove", this.itemTouchMove);
      this.$el.addEventListener("touchend", this.itemTouchEnd);
    },
    
    TouchStart(event){
      alert("touch")
      let touch = event.touches[0];
      console.log(touch);
      
    },
    itemTouchMove(event){
      alert(event)
    }
    
  },
  mounted() {
    this.param();
    this.getGoodsHeight();
    this.$store.dispatch("req_recommend_goods",this.params);
    
  },
  filters: {
    filterPrice(price) {
      let tempPeice = price / 100;
      return tempPeice.toFixed(2);
    }
  }
};
</script>

<style>
.recommend {
  width: 100%;
  background-color: #ffe;
  
}
.recommend_goods {
  list-style: none;
  width: 100%;
  margin-bottom: 60px;
  display: flex;
  flex-wrap: wrap;
}
.recommend_goods_list {
  width: 48%;
  height: 269px;
  background: #fff;
}
.recommend_goods_list:nth-child(even){
  margin-left: 2%;
}
.goods {
  width: 100%;
  height: 100%;
  position: relative;
}
.goods_img {
  width: 100%;
  
}
.goods_img img {
  width: 100%;
}
.goods .goods_name {
  width: 100%;
}
.goods_name p{
  overflow: hidden;
  height: 18px;
  line-height: 18px;
  font-size: 13px;
  font-weight: 450;
  margin: 4px 5px;
}
.goods_tags {
  display: flex;
  width: 100%;
  margin: 3px 4px;
}
.goods_tags div {
  color: #ff5706;
  font-size: 12px;
  background-color: rgba(255,87,6,0.08);
}
.goods_bottom {
  display: flex;
  position: absolute;
  bottom: 5px;
  left: 0;
  height: 26px;
  width: 100%;
}
.goods_price_logo{
  color: #e02e24;
  font-weight: bold;
  font-size: 12px;
}
.goods_bottom .goods_price {
  font-weight: bolder;
  font-size: 15px;
  line-height: 15px;
  color: #e02e24;
  margin-right: 4px;
}
.find_button{
  height: 100%;
}
.find_button > button {
  color: #58595b;
  font-size: 12px;
  height: 100%;
  width: 50px;
  background-color: #fff;
  border: 1px solid #c6c6c6;
  font-weight: 100;
  position: absolute;
  right: 0;
  bottom: 5px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border-right: none;
}
.sales_tip{
  color: #9c9c9c;
  font-size: 12px; 
}
</style>
