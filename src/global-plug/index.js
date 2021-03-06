import GlobalMethods from './global-methods/index.js';
import GlobalDirectives from './global-directives/index.js';
import GlobalMixin from './global-mixin/index.js';
import GlobalInstanceMethods from './global-instance-methods/index.js';
import GlobalFilters from './global-filter/index.js'
let MyPlugin = {};
MyPlugin.install = function (Vue, options) {
  // 1. 添加全局方法或属性
  /*Vue.myGlobalMethod = function () {
    
  }*/
  Object.keys(GlobalMethods).forEach(function(key){
    Vue[key] = GlobalMethods[key]
  })
  // 2. 添加全局指令
  /*Vue.directive('my-directive', {
    bind (el, binding, vnode, oldVnode) {
      
    }
   
  })*/
  Object.keys(GlobalDirectives).forEach(function(key){
    Vue.directive(GlobalDirectives[key].directiveName,GlobalDirectives[key].configObject)
  })
  // 3. 注入组件选项
  /*Vue.mixin({
    created: function () {
    }
  })*/
  Vue.mixin(GlobalMixin)
   
  // 4. 添加实例方法或属性
  /*Vue.prototype.$myMethod = function (methodOptions) {
    
  }*/
  Object.keys(GlobalInstanceMethods).forEach(function(key){
    Vue.prototype[key] = GlobalInstanceMethods[key]
  })
  //5.添加全局过滤器filter
 /* Vue.filter('capitalize', function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  })*/
  Object.keys(GlobalFilters).forEach(function(key){
    Vue.filter(GlobalFilters[key].filterName,GlobalFilters[key].filterHander)
  })
}
export default MyPlugin