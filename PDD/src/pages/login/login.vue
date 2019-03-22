<template>
    <div class="login">
        <div class="loginTitle">选择登录方式</div>
        <div class="phoneLogin">
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
    
}
</script>

<style>
    .login{
        width: 100%;
        height: 100%;
        background-color: #fff;
    }
    .loginTitle{
        text-align: center;
        color: #151516;
        margin: 45% auto 50px auto;
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
        margin-top: 60%;
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