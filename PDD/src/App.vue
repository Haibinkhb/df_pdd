<template>
  <div id="app">
    <router-view />
    <tabBottom style="posi"></tabBottom>
    
  </div>
</template>

<script>
import tabBottom from '../src/components/Tab-bottom'

export default {
  name: 'App',
  components: {
    tabBottom,
  }
 
}
</script>

<style>
  #app {
    width: 100%;
    height: 100%;
    position:relative;
    background-color: #f5f5f5;
    margin-bottom: 60px;
    box-sizing: border-box;
  }
</style>
