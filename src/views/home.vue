<template>
  <div class="home">
    <h3>1.使用ElementUi</h3>
    <div v-on:click="toElementUi" class="common">click to elementUi Page</div>
     <h3>2.使用vuex</h3>
    <div @click="toVuexPage" class="common">click to Vuex page</div>
     <h3>3.使用Proxy</h3>
    <div @click="toProxyPage" class="common">click to Proxy Page</div>
    <h3>4.使用jquery</h3>
    <div @click="toJqueryPage" class="common">click to jquery page</div>
    <h3>5.使用extends</h3>
    <div @click="toExtendsPage" class="common">click to extends page</div>
  </div>
</template>

<script>
export default {
  methods: {
    /********************* 路由跳转 *****************************************/
    toElementUi() {
      this.$router.push({ path: "/elementui" });
    },
    toVuexPage() {
      this.$router.push({ path: "/vuex" });
    },
    toProxyPage() {
      this.$router.push({ path: "/proxy" });
    },
    toJqueryPage(){
      this.$router.push({ path: "/jquery" });
    },
    toExtendsPage(){
       this.$router.push({ path: "/extends" });
    }
  }
};
</script>
<style scoped lang='scss'>
.home{
  text-align: left;
  h1{
    padding: 3px 0;
  }
  .common{
    cursor: pointer;
    padding: 5px 10px;
    background-color: #ddd;
  }
}
</style>

