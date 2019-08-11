import Vue from 'vue'
import Axios from 'axios'
import App from './App.vue'
import router from './router'
import $ from 'jquery'
import vuescroll from 'vuescroll';//滚动条插件
import store from './store/store.js';
import './style/init.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en';//elementui组件使用英文
import Fragment from 'vue-fragment'
Vue.use(Fragment.Plugin)

Vue.use(vuescroll, {
  ops: {}, // 在这里设置全局默认配置
  name: 'myScroll' // 在这里自定义组件名字，默认是vueScroll
})
Vue.use(ElementUI,{ locale });
Vue.config.productionTip = false
Vue.prototype.axios = Axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
