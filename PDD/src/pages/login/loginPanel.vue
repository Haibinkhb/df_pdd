<template>
    <div class="searchPanel">
        <div class="chooseMode">
            <div class="content">
                <div class="contentTop">
                    <span>用户名登录</span>
                    <span>手机登录</span>
                </div>   
                <form action="">
                   <label for="">
                       <input type="text" placeholder="用户名">
                    </label> 
                    <label for="">
                       <input type="password" placeholder="密码">
                    </label> 
                </form> 
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.searchPanel{
    width: 100%;
    height: 100%;
    background-color: #fff;
    
}
.chooseMode{
    width: 100%;
    height: 50%;
    margin: 100px auto;
    
}
.content{
    width: 100%;
    height: 100%;
}
.contentTop{
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #9c9c9c;
}
.contentTop span{
    width: 50%;
}
</style>

