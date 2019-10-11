<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
<script>
export default {
  mounted(){
    //页面加载完毕删除localStroge中的USERNAME
    localStorage.removeItem('USERNMAE');
  }
}
</script>

