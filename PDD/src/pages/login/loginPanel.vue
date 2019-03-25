<template>
  <div class="searchPanel">
    <div class="chooseMode">
      <div class="content">
        <div class="contentTop">
          <div :class="{choose:loginWay}" @click="chooseLogin()">用户名登录</div>
          <div
          :class="{choose:!loginWay}"
          @click="chooseLogin()"
          >手机登录</div>
        </div>
        <form action>
          <div class="userName" v-if="loginWay">
            <label>
              <input type="text" placeholder="用户名" v-model="userName">
            </label>
            <label>
              <input type="password" placeholder="密码" v-model="password">
            </label>
            <label class="verification">
                <input type="text" placeholder="验证码" v-model="identifyingCode">
                <img 
                ref="captcha"
                src="http://localhost:3000/api/getCaptcha" 
                alt="" 
                class="verificationImg"
                @click="changeCaptcha()"
                >
            </label>
          </div>
          <div class="phone_login" v-else-if="!loginWay">
            <label for class="phone">
              <input type="phone" placeholder="手机号" v-model="phone">
              <button
              v-if="!count" 
              class="getCode"
              :class="{phoneRight:validatePhone}"
              @click.prevent="sendCode"
              >
              获取验证码
              </button>
              <button disabled="disabled" v-else class="getCode">已发送({{count}}s)</button>
            </label>
            <label for>
              <input type="tel" placeholder="验证码" v-model="phoneCode">
            </label>
          </div>
          <div class="loginButton">
            <button @click.prevent="login">登录</button>
            
          </div>
        </form>
        <button @click="$router.back('/login')" >返回</button>
      </div>
    </div>
  </div>
</template>

<script>
import {get_phoneCode,phoneCodeLogin,userNameLogin} from "./../../api/index.js"
import {mapActions} from "vuex"
export default {
    data(){
        return{
            loginWay:true,
            userName:"",//用户名
            password:"",//登录密码
            identifyingCode:"",//验证码
            phone:"",//手机号码
            phoneCode:"",//手机短信验证码
            count:0,//倒计时
        }
    },
    methods:{
      ...mapActions(["syncUserInfo"]),
      //选择登录方式
      chooseLogin(){
          this.loginWay = ! this.loginWay;
      },
      //切换验证码
      changeCaptcha(){
        this.$refs.captcha.src = "http://localhost:3000/api/getCaptcha?time=" + new Date()
      },
      //获取验证码按钮的点击事件
      async sendCode(){
        if(!this.validatePhone){
            return;
        }
        //更改按钮样式（倒计时）
        else if(this.validatePhone){
          this.count = 5;
          let intervalId = setInterval(()=>{
            this.count--;
            if(this.count === 0){
              clearInterval(intervalId);
            }
          },1000)
        }
       //获取验证码
      let phoneCode = await get_phoneCode(this.phone);
      
        console.log(phoneCode);
      
      },
      async login(){
        //登录模式
        if(!this.loginWay){//手机号码登陆
          if(!this.phone){
            console.log("请输入手机号码");
            return;
          }else if(!this.validatePhone){
            console.log("请输入正确的手机号码");
            return
          }else if(!this.phoneCode){
            console.log("请输入验证码");
            return
          }else if(!(/^\d{6}$/gi.test(this.phoneCode))){
            console.log("请输入正确的验证码");
            return 
          }
          else{
            let results = await phoneCodeLogin(this.phone,this.phoneCode);
            console.log(results);
            if(results.successCode !== 200){
              console.log("登录失败");  
            }else{
              this.syncUserInfo(results)
            }
            
          }
        }else{//用户名&密码登录
          if(!this.userName){
            return
          }else if(!this.password){
            return
          }else if (!this.identifyingCode){
            return
          }else{
            let results = await userNameLogin(this.userName,this.password,this.identifyingCode);
            console.log(results);
            
            if(results.successCode !== 200){
              console.log("登录失败");
            }else{
              this.syncUserInfo(results)
            }
          }
        }
      }
    },
    computed:{
      //验证手机号码是否合理
      validatePhone(){
        return /^[1][3,4,5,7,8,9][0-9]{9}$/.test(this.phone);
      }
    }
};
</script>

<style>

.searchPanel {
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 10;
}
.chooseMode {
  width: 100%;
  height: 50%;
  margin: 150px auto 0 auto;
}
.content {
  width: 100%;
  height: 100%;
}
.contentTop {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 40px;
}
.contentTop div {
  width: 40%;
  height: 100%;
  border-bottom: 1px solid #767676;
  text-align: center;
}
.choose{
    border-bottom: 2px solid #e02e24 !important;
    color: #e02e24;
}
.userName{
    height: 150px;
    width: 80%;
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #767676;
}
.userName label{
    flex: 1;
    width: 100%;
    border-bottom: 1px solid #767676;
}
.userName label input{
    border: none;
    width: 100%;
    height: 100%;
    padding-left: 15px;
    box-sizing: border-box;
}
.userName .verification{
    display: flex;
    border: none
}
.userName .verification input{
    width: 60%;
    
}
.userName .verification img{
    width: 40%;
    height: 100%;
    margin: 0;
}
.phone_login{
    width: 80%;
    height: 100px;
    margin: 30px auto 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #767676;
    background-color: #fff;
    z-index: 100;
}
.phone_login label{
    width: 100%;
    height: 50%;
    border-bottom: 1px solid #767676;

}
.phone_login:last-child{
    border-bottom: none;
}
.phone_login label input{
    width: 100%;
    height: 100%;
    border: none;
    padding-left: 15px;
    box-sizing: border-box;
}
.phone{
    display: flex;
}
.phone input{
    width: 60%;
    height: 100%;
}
.phone .getCode{
    width: 40%;
    height: 100%;
    border: none;
    outline: none;
    color: #9c9c9c;
    background-color: transparent;
    text-align: center;
    line-height: 100%;
}
.phoneRight{
  color: #e02e24 !important;
}
* label input:focus{
    outline: none;
}
</style>

