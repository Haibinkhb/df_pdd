<template>
  <div class="mine" >
    <div v-if="userInfo.usersId">
      mine
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
