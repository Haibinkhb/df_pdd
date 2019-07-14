<template>
  <div class="shop_car">
    <div class="car_conten">
      <div class="top">
        <div class="top_text">
          <span>购物车（{{cart_data.length}}）</span>
          <span @click="showDelButton">管理</span>
        </div>
        <p class="shop_count">共{{cart_data.length}}件宝贝</p>
      </div>
      <div class="center">
        <div class="shop_car_list" v-if="cart_data">
          <div class="list_center" v-for="(goods,index) in cart_data" :key="index">
            <div class="select_icon" @click="ischecked(index)">
              <svg v-if="!goods.isChecked" class="icon normal" aria-hidden="true">
                <use xlink:href="#icon-xuanzhong" />
              </svg>
              <svg v-else class="icon" aria-hidden="true">
                <use xlink:href="#icon-iconfontxuanzhong" />
              </svg>
            </div>
            <a href="#" class="goods_img">
              <img :src="goods.thumb_url" />
            </a>
            <div class="goods_description">
              <div class="goods_name">{{goods.goods_name}}</div>
              <div class="goods_price">
                <span class="price">￥{{goods.price|filterPrice}}</span>
                <div class="goods_quantity">
                  <span class="reduce">-</span>
                  <input type="text" v-model="goods.buy_count" />
                  <span class="add">+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="allCheck" @click="allChecked">
          <svg v-if="!isAllChecked" class="icon normal" aria-hidden="true">
            <use xlink:href="#icon-xuanzhong" />
          </svg>
          <svg v-else class="icon" aria-hidden="true">
            <use xlink:href="#icon-iconfontxuanzhong" />
          </svg>
          <span>全选</span>
        </div>
        <div class="settle" v-if="operating">
          <span>合计</span>
          <span class="price">￥{{selcetedPrice|filterPrice}}</span>
          <button>结算({{cart_data.length}})</button>
        </div>
        <div v-else>
          <button class="delete">删除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      count: 0, //购物车宝贝个数
      quantity: 1, //加入个购物车的单个宝贝的数量
      operating: true, //是否显示删除按钮
      isAllChecked: false, //是否全选购物车中的商品
      selcetedPrice: 0 //购物车中选中商品的价格
    };
  },
  methods: {
    showDelButton() {
      //是否显示删除按钮
      this.operating = !this.operating;
    },
    ischecked(index) {
      //选中单个商品
      this.$store.dispatch("isChecked", index);
      // 计算价格
      this.calculatePrice();
    },
    allChecked() {
      //全选
      this.$store.dispatch("checkedAll", this.isAllChecked);
      this.isAllChecked = !this.isAllChecked;
      // 计算价格
      this.calculatePrice();
    },
    // 计算价格
    calculatePrice() {
      let tempePrice = 0;
      this.cart_data.forEach(goods => {
        if (goods.isChecked === true) {
          tempePrice += goods.price * goods.buy_count;
        }
      });
      this.selcetedPrice = tempePrice;
    }
  },
  mounted() {
    //获取购物车数据
    this.$store.dispatch("getCartDate");
  },
  computed: {
    ...mapState(["cart_data"])
  },
  filters: {
    filterPrice(price) {
      return (price / 100).toFixed(2);
    }
  }
};
</script>

<style>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.normal {
  color: #ccc;
}
.shop_car {
  width: 100vw;
  height: 100vh;
  z-index: 1;
}
.top {
  height: 25vh;
  width: 100vw;
  background: linear-gradient(to right, #ff8400, #ff5100);
  padding: 2vh 3vw;
  box-sizing: border-box;
  color: #fff;
  z-index: 0;
}
.top_text {
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.top_text span:first-child {
  font-size: 20px;
  font-weight: bolder;
}
.top_text span:last-child {
  font-size: 15px;
}
.shop_count {
  font-size: 12px;
  padding-top: 2vh;
}

.center {
  width: 90vw;
  background-color: #f8f8f8;
  margin: -12vh 5vw 1vh 5vw;
}
.list_center {
  border-radius: 10px;
  box-sizing: border-box;
  width: 100%;
  height: inherit;
  padding-top: 1vh;
  margin-bottom: 2vh;
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: #fff;
}

.select_icon {
  width: 12%;
  align-self: center;
}
.goods_img {
  width: 28%;
  display: block;
}
.goods_img img {
  width: 100%;
}
.goods_description {
  padding-left: 2%;
  width: 58%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.goods_name {
  align-self: left;
  width: 98%;
  overflow-x: hidden;
  font-size: 14px;
  height: 36px;
  letter-spacing: 1px;
  color: rgb(51, 51, 51);
}
.goods_price {
  width: 100%;
  display: flex;
  line-height: 28px;
}
.price {
  width: 20%;
  color: #ff5500;
  font-size: 14px;
  text-align: left;
}
.goods_quantity {
  display: inline-block;
  width: 80%;
  justify-content: space-around;
}
.goods_quantity .reduce {
  width: 25%;
}
.goods_quantity .add {
  width: 25%;
}

.goods_quantity input {
  width: 25%;
  outline: none;
  border: none;
  text-align: center;
}

.footer {
  position: fixed;
  bottom: 60px;
  left: 0;
  width: 100vw;
  padding: 0 5vw 0 5vw;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.allCheck span {
  font-size: 12px;
  color: #666;
}
.settle {
  font-size: 15px;
  color: #333;
}
.settle button {
  box-sizing: border-box;
  outline: none;
  border-radius: 48%;
  background: linear-gradient(to right, #ff8400, #ff5100);
  border: none;
  color: rgba(255, 255, 255, 0.5);
  width: 60px;
  height: 35px;
  font-size: 15px;
}
.delete {
  box-sizing: border-box;
  outline: none;
  border-radius: 48%;
  color: #fc0a0a;
  background: #fff;
  width: 50px;
  height: 35px;
  font-size: 15px;
  border: 1px solid #fc0a0a;
}
</style>


