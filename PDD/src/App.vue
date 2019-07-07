<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tabBottom v-if="this.$route.meta.showTabBootom"></tabBottom>
  </div>
</template>

<script>
import tabBottom from '../src/components/Tab-bottom'

export default {
  name: 'App',
  components: {
    tabBottom,
  },
  created() {
    this.$store.dispatch("getUserInfo")
  },
}
</script>

<style>
  #app {
    width: 100vw;
    max-height: 100vh;
    position:relative;
    background-color: #f5f5f5;
    padding-bottom: 60px;
    box-sizing: border-box;
  }
</style>
