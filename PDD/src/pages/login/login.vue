<template>
    <div class="login">
        <div class="loginTitle">选择登录方式</div>
        <div class="phoneLogin" 
        @click="changeRouter('/loginPanel')"
        >
            <span>手机登录</span>
        </div>
        <div class="loginFooter">
            <div class="footerImg">
            </div>
            <div class="footerInsurance">
                <span>由 </span> <img src="//pinduoduoimg.yangkeduo.com/base/brand_PICC.png"><span> 全程保障</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        changeRouter(path){
            this.$router.replace(path);
        }
    }
}
</script>

<style>
    .login{
        width: 100%;
        height: 100%;
        background-color: #ccc;
        z-index: 100;
        position: fixed;
        top: 0;
        left: 0;
    }
    .loginTitle{
        text-align: center;
        color: #151516;
        font-size: 20px;
    }
    .phoneLogin{
        width: 70%;
        height: 45px;
        background-color: #f6a622;
        border-radius: 7px;
        text-align: center;
        line-height: 45px;
        color: #fff;
        margin-left: 15%;
    }
    .loginFooter{
        width: 100%;
        height: 200px;
    }
    .footerImg{
        width: 140px;
        height: 60px;
        margin: 0 auto;
        background: url("https://cdn.yangkeduo.com/assets/img/login_footer.png") no-repeat no-repeat;
        background-size: 100%;
    }
    .footerInsurance{
        width: 100%;
        text-align: center;
        color: #9c9c9c;
    }
    .footerInsurance span{
       font-size: 14px; 
       height: 12px;
    }
    .footerInsurance img{
        height: 12px;
    }
</style>