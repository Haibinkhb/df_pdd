<template>
  <div class="mine" >
    <div v-if="userInfo.usersId">
      <div class="quit_box">
        <button class="quit_button" @click="quit()">退出登陆</button>
      </div>
    </div>
    <loginPanel v-else></loginPanel>
  </div>
  
 
</template>

<script>
import loginPanel from '../login/loginPanel'
import{mapState} from 'vuex'
export default {
  name: 'Mine',
  components:{
    loginPanel,
  },
  computed:{
    ...mapState(["userInfo"])
  },
  methods:{
    quit(){
      this.$store.state.userInfo.usersId = "";
    }
  }
}
</script>

<style>
.mine{
  background-color: #f4f4f4;
  width: 100vw;
  height: 100%;
}
.quit_box{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
}
.quit_button{
  width: 80%;
  height: 6vh;
  outline: none;
  border: none;
  background-color: #e02e24;
  color: #fff;
  border-radius: 4px;
}

</style>
