<template>
  <div class="mine" >
    <div v-if="userInfo.usersId">
      <div>
        <button @click="quit()">退出登陆</button>
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
  width: 100%;
  height: 100%;
}

</style>
