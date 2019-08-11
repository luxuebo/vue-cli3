<template>
  <div class="home">
    <HomeTitle />
    <img alt="Vue logo" src="../assets/logo.png">
    <div @click='toVuexPage'>
      <p>Vuex</p>
    </div>
    <div @click='toProxyPage' >Proxy</div>
    <div v-on:click='toElementUi'>
      element ui
    </div>
    <router-link to='/offWebMenu'>offWebMenu</router-link>
  </div>
</template>

<script>
import HomeTitle from '../components/HomeTitle.vue'
export default {
  components: {
    HomeTitle
  },
  data(){
    return{

    }
  },
  mounted(){
  },
  methods:{
    toVuexPage(){
      this.$router.push({path:'/vuex'})
    },
    toProxyPage(){
      this.$router.push({path:'/proxy'})
    },
    toElementUi(){
      this.$router.push({path:'/elementui'})
    }
  }
}
</script>
<style scoped lang='scss'>
$colr:red;
div{
  color:$colr;
  p{
    font-size: 30px
  }
}
</style>

