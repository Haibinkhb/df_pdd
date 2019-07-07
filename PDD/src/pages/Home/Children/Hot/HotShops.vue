<template>
  <div class="hotShops">
    
    <ul class="shopsList" v-if="home_goodslist">
  
      <li class="shopItem" 
      v-for="goods in home_goodslist" 
      :key="goods.goods_id"
      >
        <a :href="baseUrl+goods.link_url" id="toShopA">
          <div class="shopContent">
            <div class="shopContent_left">
              <img :src="goods.hd_thumb_url" alt>
            </div>

            <div class="shopContent_right">
              <div class="shopRight_top">{{goods.goods_name}}</div>
              <div class="shopRight_center"></div>
              <div class="shopRight_bottom">
                <div class="shoprRemarks">
                  <span></span>
                  <span>退货包运费</span>
                </div>
                <div class="shopPrice">
                  <span class="priceLoge">￥</span>
                 
                  {{goods.price|filterPrice}}
                  <span>{{goods.sales_tip}}</span>
                  <div class="shopUser">
                    <img src="../../imgs/shop_list/user1.jpg" alt>
                    <img src="../../imgs/shop_list/user2.jpg" alt>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      baseUrl: "http://mobile.yangkeduo.com/"
    };
  },
  methods: {},
  computed: {
    ...mapState(["home_goodslist"])
    
  },
  mounted() {
    this.$store.dispatch("req_goodslist");
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
.hotShops {
  width: 100%;
  height: 100%;
  z-index: 1;
  margin-bottom: 60px;
}
.shopsList {
  width: 100%;
  background-color: #f5f5f5;
}
.shopItem {
  background-color: #fff;
  margin: 5px;
  list-style: none;
}
#toShopA {
  display: block;
  text-decoration: none;
  position: relative;
}
.shopContent {
  height: 100%;
  width: 100%;
  display: flex;
}
/* 左边 */
.shopContent_left {
  flex-shrink: 0;
  width: 40%;
  height: 100%;
}
.shopContent_left img {
  width: 100%;
  height: 100%;
}

/* 右边 */
.shopContent_right {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0px 5px;
  box-sizing: border-box;
}
.shopContent_right .shopRight_top {
  width: 100%;
  height: 44px;
  font-weight: 600;
  margin-top: 5px;
  font-size: 14px;
  line-height: 22px;
  color: #333;
  overflow: hidden;
}
.shopRight_center {
  margin-top: 5px;
  font-size: 12px;
  color: #838383;
}
.shopRight_bottom {
  width: 60%;
  position: absolute;
  bottom: 10px;
}
.shoprRemarks {
  font-weight: bold;
  margin-bottom: 15px;

  color: #ff5706;
  font-size: 12px;
}
.shoprRemarks span {
  background-color: rgba(255, 87, 6, 0.08);
}
.shoprRemarks span {
  margin-left: 5px;
}
.shopPrice {
  color: #e02e24;
  font-weight: bolder;
  font-size: 15px;
}
.shopPrice .priceLoge {
  color: #e02e24;
  font-weight: bold;
  font-size: 12px;
}
.shopPrice span {
  color: #9c9c9c;
  font-size: 12px;
}
.shopRight_bottom .shopUser {
  width: 50px;
  height: 25px;
  display: flex;
  position: absolute;
  right: 0px;
  bottom: 0px;
}
.shopRight_bottom .shopUser img {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-left: -8px;
}
</style>

