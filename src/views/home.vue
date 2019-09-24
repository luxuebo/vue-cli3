<template>
  <div class="home">
    <div v-for="(item,index) in listData" :key='index'>
      <h3>{{item.title}}</h3>
     <router-link :to='item.route' tag="div"  class="common">{{item.content}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      listData:[
        {
          title:'001.elementui-demo',
          route:'/elementui',
          content:'click to elementui-demo page'
        },
        {
          title:'002.vuex',
          route:'/vuex',
          content:'click to vuex page'
        },
        {
          title:'003.proxy',
          route:'/proxy',
          content:'click to proxy page'
        },
        {
          title:'004.jquery',
          route:'/jquery',
          content:'click to jquery page'
        },
        {
          title:'005.extends',
          route:'/extends',
          content:'click to extends page'
        },
        {
          title:'006.render函数',
          route:'/render',
          content:'click to render page'
        },
        {
          title:'007.slot插槽',
          route:'/slot',
          content:'click to slot page'
        },
        {
          title:'008.自定义指令',
          route:'/cus-directive',
          content:'click to customize-directive page'
        },
        {
          title:'009.mixin混入',
          route:'/mixin',
          content:'click to mixin page'
        },
        {
          title:'010.JSX',
          route:'/jsx',
          content:'click to jsx page'
        },
        {
          title:'011.Plug插件',
          route:'/plug',
          content:'click to Plug page'
        },
        {
          title:'012.filter',
          route:'/filter',
          content:'click to filter page'
        }
      ]
    }
  }
};
</script>
<style scoped lang='scss'>
.home {
  text-align: left;
  h1 {
    padding: 3px 0;
  }
  .common {
    cursor: pointer;
    padding: 5px 10px;
    background-color: #ddd;
  }
}
</style>

