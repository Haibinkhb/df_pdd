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
            <label for>
              <input type="text" placeholder="用户名">
            </label>
            <label for>
              <input type="password" placeholder="密码">
            </label>
            <label for="" class="verification">
                <input type="text" placeholder="验证码"><img src="" alt="" class="verificationImg">
            </label>
          </div>
          <div class="phone_login" v-else-if="!loginWay">
            <label for class="phone">
              <input type="phone" placeholder="手机号">
              <button class="getCode">获取验证码</button>
            </label>
            <label for>
              <input type="tel" placeholder="验证码">
            </label>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            loginWay:true,
        }
    },
    methods:{
        chooseLogin(){
            this.loginWay = ! this.loginWay;
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
    height: 80%;
    border: none;
    outline: none;
    color: #e02e24;
    background-color: transparent;
}
* label input:focus{
    outline: none;
}
</style>

