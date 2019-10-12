<template>
  <div id="app">
    <router-view />
  </div>
</template>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
<script>
import { keepState } from  './utils/keepState'
export default {
  created() {
    keepState(['username','tabsList','activeIndex'])
  },
  mounted() {
    //页面加载完毕删除sessionStorage中的USERNAME
    // sessionStorage.removeItem("USERNMAE");
  }
};
</script>

