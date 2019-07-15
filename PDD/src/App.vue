<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="isRouterAlive"></router-view>
    </keep-alive>
    <tabBottom v-if="this.$route.meta.showTabBootom"></tabBottom>
  </div>
</template>

<script>
import tabBottom from '../src/components/Tab-bottom'

export default {
  name: 'App',
  provide () {
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    reload () {
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    }
  },
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
  position: relative;
  background-color: #f5f5f5;
  box-sizing: border-box;
}
.mescroll-totop {
  display: none;
}
</style>
