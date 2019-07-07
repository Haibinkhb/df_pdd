<template>
  <div class="recommend">
      <ul class="recommend_goods" v-if="recommend_goods">
        <li class="recommend_goods_list" v-for="goods in recommend_goods" :key="goods.goods_id">
          <div class="goods">
            <div class="goods_img">
              <img :src="goods.hd_thumb_url" />
            </div>
            <div class="goods_name">
              <p>{{goods.goods_name}}</p>
            </div>
            <div class="goods_tags">退货无忧</div>
            <div class="goods_bottom">
              <div class="goods_price">
                <span class="goods_price_logo">￥</span>
                {{goods.price|filterPrice}}
              </div>
              <div class="sales_tip">{{goods.sales_tip}}</div>
              <div class="find_button">加入购物车</div>
            </div>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import $ from "jquery"; //引入jquery...
export default {
  data() {
    return {

    };
  },
  computed: {
    ...mapState(["recommend_goods"])
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
  width: 100vw;
  height: 100vh;
  background-color: #fff;
}
.scroller {
  width: 100%;
  height: 100%;
}
.recommend_goods {
  list-style: none;
  width: 100%;
  padding-bottom: 60px;
  display: flex;
  flex-wrap: wrap;
}
.recommend_goods_list {
  width: 48%;
  background: #fff;
}
.recommend_goods_list:nth-child(even) {
  margin-left: 2%;
}
.goods {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
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
.goods_name p {
  overflow: hidden;
  height: 18px;
  line-height: 18px;
  font-size: 13px;
  font-weight: 450;
  margin: 4px 5px;
}
.goods_tags {
  margin: 3px 4px;
  color: #ff5706;
  background-color: rgba(255, 87, 6, 0.08);
  font-size: 12px;
}
.goods_bottom {
  display: flex;
  justify-content: space-between;
  line-height: 18px;
  width: 100%;
}
.goods_price_logo {
  color: #e02e24;
  font-weight: bold;
  font-size: 10px;
  line-height: 18px;
}
.goods_bottom .goods_price {
  font-weight: bolder;
  font-size: 10px;
  line-height: 18px;
  color: #e02e24;
}
.find_button {
  color: #e02e24;
  font-size: 10px;
  background-color: rgba(255, 87, 6, 0.6);
  border-radius: 2px;
  line-height: 18px;
}
.sales_tip {
  color: #9c9c9c;
  font-size: 12px;
}
</style>
