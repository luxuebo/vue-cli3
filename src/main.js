import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuescroll from 'vuescroll';//滚动条插件
import store from './store/store.js';
import './style/init.css'//自定义全局公共样式
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en';//elementui组件使用英文
import Fragment from 'vue-fragment';
import vuelxbui from 'vue-lxbui';//自己封装的ui可以通过pnm下载
import './components/globalComponents/index.js'//自动化注册全局组件
import myplug from './global-plug'//自定义全局插件,包括:1.全局方法或属性 2.全局指令 3.全局mixin 4.实力方法和属性
Vue.use(Fragment.Plugin)
Vue.use(vuelxbui)
Vue.use(vuescroll, {
  ops: {}, // 在这里设置全局默认配置
  name: 'myScroll' // 在这里自定义组件名字，默认是vueScroll
})
Vue.use(ElementUI,{ locale });
Vue.use(myplug)
Vue.config.productionTip = false
//全局注册render函数组件
Vue.component('global-render', {
  render: function (createElement) {
    return createElement(
      'h' + this.level,   // 标签名称
      this.$slots.default // 子节点数组
    )
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
})
new Vue({
  rootOption: 'hello!',//自定义选项,可通过this.$options获取
  router,
  store,
  mounted(){
    // console.log(this.$options.rootOption)
  },
  render: h => h(App)
}).$mount('#app')
// console.log(store.state)
// 页面刷新之前,将vuex中的存到sessionStorage中
// window.addEventListener('beforeunload',function(){
//   sessionStorage.setItem('USERNMAE',store.state.username)
// })
