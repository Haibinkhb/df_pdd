<template>
  <div class="hot" ref="hot" @scroll="hotScroll" @HotScroll="changHotScroll">
      <HotSwiper></HotSwiper>
      <HotNav></HotNav>
      <HotAd></HotAd>
      <HotShops :closeScroll="closeScroll"></HotShops>
</div>
</template>

<script>
import HotNav from "./HotNav";
import HotAd from "./HotAd";
import HotShops from "./HotShops";
import HotSwiper from "./HotSwiper";


import { mapState } from "vuex";

export default {
  components: {
    HotNav,
    HotAd,
    HotShops,
    HotSwiper,
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
        //this.$refs.hot.style.overflow = "hidden"//关闭hot滚动
      }
    }
  },
  computed: {
    HotScroll:function(){
      console.log(this.changHotScroll);

    }
  },
  mounted() {
    this.$nextTick(() => {
      this.clientHeight = this.$refs.hot.clientHeight;
      this.scrollHeight = this.$refs.hot.scrollHeight;
    });
  },
  watch: {
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
  overflow-y: scroll;
  /* display: flex;
  flex-direction: column; */
}

</style>


