<template>
  <div class="serarch">
    <div class="searchTop">
      <div class="searchTop-content">
        <a class="searchTop-link">
          <i class="iconfont">&#xe708;</i>
          <span>搜索</span>
        </a>
      </div>
    </div>
    <div class="searchContent" v-if="search_data">
      <div class="searchLeft">
        <ul class="searchLeft-content">
          <li
            class="searchIteam"
            v-for="(search,index) in search_data"
            :key="index"
            :class="{'current':clicked===index}"
            @click="currented(index)"
          >{{search.name}}</li>
        </ul>
      </div>
      <div class="searchRight">
        <ul class="searchRigntContent">
          <li v-for="(searchItem,keys) in search_data" :key="keys">
            <div class="searchRight-top">
              <div class="topTitle">{{searchItem.name}}</div>
              <div class="topMore">
                <a href>查看更多 ></a>
              </div>
            </div>
  
            <div class="searchRight-bottom">
              <ul class="bottomContent">
                <li class="bottomIteam" v-for="(items,index2) in searchItem.items" :key="index2">
                  <div class="iteamImg">
                    <img :src="items.icon" alt>
                  </div>
                  <span class="iteamText">{{items.title}}</span>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
import { mapState } from "vuex";
export default {
  data() {
    return {
      clicked: 0, // 选中第几个左侧栏
      rightLiOffseTop: [], //右侧每个LI的offseTop
      leftLi: [], //左侧所有的LI元素
      rightScrollY:0 //右侧滚动条滚动的距离
    }
  },
  methods: {
    //左侧栏的点击
    currented(index) {
      this.clicked = index;//切换为选中样式
      //右侧滚动条跳转到相应位置
      this.rightScroll.scrollTo(0,-this.rightLiOffseTop[index]+250, 500)
    },
    //获取右侧每个LI的offseTop
    getRightLiOffseTop() {
      let rightUl = $(".searchRigntContent")[0].childNodes;
       let tempArr = Array.from(rightUl);
       for (let i = 0; i < tempArr.length; i++) {
         let top = tempArr[i].offsetTop;
         this.rightLiOffseTop.push(top);
       } 
    },
    getleftLi() {
      let leftUl = $(".searchLeft-content")[0].childNodes;
    },
  },
  mounted() {
    this.$store.dispatch("req_search_data");//获取数据
    
  },
  watch:{
    search_data(){
    this.$nextTick(()=>{
      //获取左侧每个LI
      this.getleftLi()
      //初始化滚动条
      this.leftScroll = new Bscroll(".searchLeft",{
      scrollbar: {
        fade: true,
        interactive: false // 1.8.0 新增
      },
      probeType: 1
    })
    this.rightScroll = new Bscroll(".searchRight",{
      scrollY:true,
      scrollbar: {
        fade: true,
        interactive: false // 1.8.0 新增
      },
      probeType: 3
    })
    //获取右侧滚动条滚动的位置
    this.rightScroll.on("scroll",(pos)=>{
      this.rightScrollY = pos.y
      for(let i=0;i<this.rightLiOffseTop.length;i++){
        if((this.rightLiOffseTop[i+1])>-this.rightScrollY
        && this.rightLiOffseTop[i]-350<-this.rightScrollY){
          this.leftScroll.scrollToElement(this.leftLi[i], 400)
          this.clicked = i;
        }else if(this.rightLiOffseTop[this.rightLiOffseTop.length-2]
        < -this.rightScrollY){
          this.leftScroll.scrollToElement(this.leftLi[this.rightLiOffseTop.length-1], 200);
          this.clicked = this.rightLiOffseTop.length-1
        }
        
      }
      
    })
    //获取右侧所有li的offsetTop
    this.getRightLiOffseTop();
    })
    }
  },
  computed: {
    ...mapState(["search_data"])
    
  }
};
</script>

<style>
@import url("./icons/font/demo.css");

/*
  URL为项目内调用字体的路径
*/
@font-face {
  font-family: "iconfont"; /* project id 1039363 */
  src: url("//at.alicdn.com/t/font_1039363_bd4jyzhdddw.eot");
  src: url("//at.alicdn.com/t/font_1039363_bd4jyzhdddw.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1039363_bd4jyzhdddw.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1039363_bd4jyzhdddw.woff") format("woff"),
    url("//at.alicdn.com/t/font_1039363_bd4jyzhdddw.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1039363_bd4jyzhdddw.svg#iconfont") format("svg");
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.serarch {
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.searchTop {
  border-bottom: 1px solid #ddd;
  width: 100%;
  height: 10%;
  
  background-color: #fff;
  z-index: 998;
  box-sizing: border-box;
  padding: 3% 5% 3% 5%;
}
.searchTop > .searchTop-content {
  border-radius: 8px;
  width: 100%;
  height: 100%;
  background-color: #f1f1f1;
  text-align: center;
}
.searchTop-content > .searchTop-link {
  width: 100%;
  height: 100%;
  display: inline-block;
  text-align: center;
  line-height: 45px;
  color: #9c9c9c;
}
.searchTop-content > .searchTop-link span {
  margin-left: 5px;
  font-size: 18px;
}

.searchContent {
  width: 100%;
  height: 90%;
  background-color: #f1f1f1;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  margin-bottom: 60px;
}

/* 左边 */
.searchContent .searchLeft {
  width: 24%;
  height: 100%;
  background-color: rgb(250, 250, 250) !important;
  z-index: 997;
  overflow: hidden;
  margin-bottom: 60px;
}
.searchLeft > .searchLeft-content {
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  background-color: rgb(250, 250, 250);
}
.searchLeft-content .searchIteam {
  width: 100%;
  height: 5%;
  text-align: center;
  line-height: 57px;
  font-weight: lighter;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* 选中 */
.current {
  background-color: #fff;
  color: #e02e24;
}
.current::before {
  line-height: 58px;
  content: "";
  width: 3px;
  height: 30px;
  position: absolute;
  left: 0;
  background-color: #e02e24;
}

/* 右边 */
 .searchRight {
  background-color: #fff;
  width: 76%;
  z-index: 997;
  height: 100%;
  margin-bottom: 60px;
}
.searchRight .searchRigntContent {
  list-style: none;
  width: 100%;
}
.searchRigntContent li {
  list-style: none;
  width: 100%;
  background-color: #fff;
  margin-bottom: 10px;
}
.searchRigntContent .searchRight-top {
  width: 100%;
  height: 26px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  line-height: 26px;
}
.searchRight-top .topTitle {
  padding-left: 20px;
  font-weight: lighter;
  
}
.searchRight-top .topMore {
  padding-right: 10px;
}
.searchRight-top .topMore > a {
  text-decoration: none;
  color: #9c9c9c;
}
.searchRight-center {
  width: 100%;
  height: 88px;
  background-color: #fff;
  box-sizing: border-box;
  padding: 0 13px;
  margin-bottom: 22px;
}
.searchRight-center img {
  width: 100%;
  height: 100%;
}
.searchRight-bottom {
  width: 100%;
}
.bottomContent {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.bottomContent .bottomIteam {
  display: relative;
  display: block;
  width: 33%;
  height: 83px;
  margin-bottom: 16px;
}
.iteamImg {
  text-align: center;
  width: 60%;
  height: 74%;
  margin: 0 20% 4% 20%;
  box-sizing: border-box;
}
.iteamImg img {
  width: 100%;
}
.bottomIteam .iteamText {
  width: 100%;
  text-align: center;
  font-size: 14px;
  display: block;
}
</style>
