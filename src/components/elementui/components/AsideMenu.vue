<template>
  <fragment>
    <template v-for="menu in menus">
      <el-submenu
        v-if="menu.children && menu.children.length >= 1"
        :index="menu.menuId + ''"
        :key="menu.menuId"
      >
        <template slot="title">
          <i :class="menu.icon"></i>
          <span slot="title">{{menu.menuName}}</span>
        </template>
        <z-menu :menus="menu.children"></z-menu>
      </el-submenu>
      <el-menu-item v-else :index="menu.menuId + ''" @click="handleRouter(menu)" :key="menu.menuId">
        <i :class="menu.icon"></i>
        <span slot="title">{{menu.menuName}}</span>
      </el-menu-item>
    </template>
  </fragment>
</template>
<script>
export default {
 
  name: 'zMenu', // 至关重要，就靠这个名字递归了
  props: {
    menus: {
      type: Array,
      default: function () {
        return [];
      },
      required: false
    }
  },
  methods: {
    handleRouter(menu) {

      //添加tabs
     if(menu.route){
       if(this.$route.path == menu.route){
         //在此点击当前路由菜单，不在跳转路由
         return
       }
      let list =this.$store.state.tabsList;
      let flag = false;
      for(let i=0;i<list.length;i++){
        if(list[i].route === menu.route){
        this.$store.commit('set_active_index',i+1)
        flag = true;
        break;
        } 
      }

      if(!flag){
        this.$store.commit('add_tabs', {route:menu.route,title: menu.menuName});
        this.$store.commit('set_active_index',this.$store.state.tabsList.length);
      }
      // 跳转路由
      this.$router.push(menu.route);
     }
    }
  }
}
</script>

<style>
</style>
