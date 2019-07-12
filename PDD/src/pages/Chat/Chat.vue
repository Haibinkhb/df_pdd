<template>
  <div class="shop_car">
    <div class="car_conten">
      <div class="top">
        <div class="top_text">
          <span>购物车（{{count}}）</span>
          <span>管理</span>
        </div>
        <p class="shop_count">共{{count}}件宝贝</p>
      </div>
      <div class="center">
        <div class="shop_car_list">
          <div class="list_center">
            <div class="select_icon">
              <svg v-if="!checked" class="icon normal" aria-hidden="true">
                <use xlink:href="#icon-xuanzhong" />
              </svg>
              <svg v-else class="icon" aria-hidden="true">
                <use xlink:href="#icon-iconfontxuanzhong" />
              </svg>
            </div>
            <div>
              <img src="#" alt />
            </div>
            <div>{{quantity}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0, //购物车宝贝个数
      quantity: 1, //加入个购物车的单个宝贝的数量
      checked: false //是否选中该商品
    };
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
.normal{
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
  height: 100vh;
  background-color: #fff;
  border-radius: 10px;
  margin: -12vh 5vw 1vh 5vw;
}
.list_center {
  display: flex;
  justify-content: space-between;
}
</style>


