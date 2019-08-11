<template>
  <div class="eui">
    <el-container>
      <el-header>
        
      </el-header>
      <el-container>
        <el-aside :width='isCollapse?"64px":"200px"' class="opop">
          <myScroll :ops="ops">
            <div @click="isCollapse = !isCollapse" class='iconfont toggle-icon' :class="[!isCollapse ? 'icon-zhedie' : 'icon-daohangzhankai-']" :title='!isCollapse?"折叠":"展开"'></div>
            <el-menu
              style="width:100%;"
              :collapse="isCollapse"
              :collapse-transition="false"
              background-color="#545c64"
              text-color="#fff"
            >
              <z-menu :menus="menuData"></z-menu>
            </el-menu>
          </myScroll>
        </el-aside>
        <el-main>
           <div>
            <el-tabs v-model="$store.state.activeIndex" type="card" closable @tab-remove="tabRemove" @tab-click='tabClick'>
              <el-tab-pane
              v-for="(item,index) in $store.state.tabsList"
              :key="index"
              :label="item.title"
              :name="String(index+1)"
              >
               <router-view/>
              </el-tab-pane>
            </el-tabs>
            </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import zMenu from "../components/elementui/components/AsideMenu";
import { menuTreeData } from "../mock/menu.js";
import { mapState } from 'vuex';
export default {
  name: "elementui",
  components: {
    zMenu
  },
  data() {
    return {
      isCollapse: false,//菜单是否折叠,默认展开
      menuData: menuTreeData,//菜单数据
      ops: {
        bar: {
          background: "#ff6700"
        }
      },//滚动条配置
    };
  },
  mounted() {
    /*设置侧边栏高度*/
    $(".opop").css({
      height: window.innerHeight - 60 + "px",
    });
  },
  methods: {
    tabClick (tabs){
      //点击tab事件
      if(this.$route.path == this.$store.state.tabsList[tabs.index-0].route){
        //点击当前高亮的tab，不在跳转路由
        return;
      }
      this.$router.push(this.$store.state.tabsList[tabs.index-0].route)
    },
    tabRemove(index){
      this.$store.commit('delete_tabs',index);
    }
  },
  computed:{
    // ...mapState(['activeIndex','age']),
  }
}
</script>
<style scoped lang="scss">
@import url('../assets/icon/iconfont.css');
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.toggle-icon{
  padding:2px 0;
  text-align: center;
  border-bottom:1px solid #fff;
}
.eui {
  .el-header,
  .el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
  }

  .el-aside {
    background-color: #545c64;
    color: #333;
    text-align: left;
    position: relative;
  }

  .el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    padding: 0;
  }
}
</style>