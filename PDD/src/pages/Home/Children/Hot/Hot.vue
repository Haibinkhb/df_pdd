<template>
  <div class="hot">
    <div class="swiper-container">
      <!-- {{homecarousel}} -->
      <div class="swiper-wrapper" v-if="homecarousel.length">
        <div class="swiper-slide" v-for="(carousel,index) in homecarousel" :key="index">
          <a :href="carousel.detail">
            <img :src="carousel.imgurl" width="100%" />
          </a>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
      <HotNav></HotNav>
      <HotAd></HotAd>
      <hot-shops></hot-shops>
  </div>
</template>

<script>
import HotNav from "./HotNav";
import HotAd from "./HotAd";
import HotShops from "./HotShops";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";

import { mapState } from "vuex";

export default {
  components: {
    HotNav,
    HotAd,
    HotShops
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["homecarousel"])
  },
  mounted() {
    this.$nextTick(() => {
      this.$store.dispatch("req_homecarousel");
    });
  },
  watch: {
    homecarousel() {
      this.$nextTick(() => {
        new Swiper(".swiper-container", {
          loop: true, // 循环模式选项
          autoplay: true,

          // 如果需要分页器
          pagination: {
            el: ".swiper-pagination"
          }
        });
      });
    }
  }
};
</script>

<style>
.hot {
  width: 100vw;
  height: 100vh;
  overflow:auto;
}
.swiper-container {
  margin-top: 50px;
  background-color: #fff;
  z-index: 1;
}
</style>


