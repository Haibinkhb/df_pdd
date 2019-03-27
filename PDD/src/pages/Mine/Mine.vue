<template>
  <div class="mine" >
    <div v-if="userInfo.usersId">
      mine
    </div>
    <login v-else></login>
  </div>
  
 
</template>

<script>
import login from '../login/login'
import{mapState} from 'vuex'
export default {
  name: 'Mine',
  components:{
    login,
  },
  computed:{
    ...mapState(["userInfo"])
  }
}
</script>

<style>
.mine{
  width: 100%;
  height: 100%;
}

</style>
