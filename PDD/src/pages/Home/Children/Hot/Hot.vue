<template>
  <div class="hot" ref="hot" @scroll="hotScroll" @HotScroll="changHotScroll">
  
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
        {{openHotScroll}}
      <HotShops :closeScroll="closeScroll"></HotShops>
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
    return {
      closeScroll:true,//是否关闭hot-shops组件上的滚动条
      scrollTop:0,//为滚动条在Y轴上的滚动距离
      clientHeight:0,//为内容可视区域的高度。
      scrollHeight:0,//为内容可视区域的高度加上溢出（滚动）的距离。
      openHotScroll:false,
      //从这个三个属性的介绍就可以看出来，滚动条到底部的条件即为scrollTop + clientHeight == scrollHeight;
    };
  },
  methods:{
    changHotScroll:function(HotScroll){
      this.openHotScroll = HotScroll;     
    },
    hotScroll(e){//监听hot滚动
      this.scrollTop = this.$refs.hot.scrollTop;//获取滚动条在Y轴上的滚动距离
      if(this.scrollTop + this.clientHeight >= this.scrollHeight+300 && this.openHotScroll == false){//判断滚动条是否滚动到底部
        this.closeScroll = false;//开启hot-shops组件上的滚动条
        this.$refs.hot.style.overflow = "hidden"//关闭hot滚动
      }
    }
  },
  computed: {
    ...mapState(["homecarousel"]),
    HotScroll:function(){
      console.log(this.changHotScroll);

    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$store.dispatch("req_homecarousel");
      this.clientHeight = this.$refs.hot.clientHeight;
      this.scrollHeight = this.$refs.hot.scrollHeight;
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
    },
    openHotScroll:function(){
      console.log(this.openHotScroll);
      
      if(this.openHotScroll){
        this.$refs.hot.style.overflow = "scroll"
      }
    },
  }
};
</script>

<style>
.hot {
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
}
.swiper-container {
  margin-top: 50px;
  background-color: #fff;
  z-index: 1;
}
</style>


