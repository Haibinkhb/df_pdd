<template>
  <div class="mine">
    <loginPanel></loginPanel>
  </div>
</template>

<script>
import login from '../login/login'
import loginPanel from '../login/loginPanel'
export default {
  name: 'Mine',
  components:{
    login,
    loginPanel
  }
}
</script>

<style>
.mine{
  width: 100%;
  height: 100%;
}
</style>
