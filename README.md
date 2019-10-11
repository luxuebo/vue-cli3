# cli3app

## Project setup
```
npm install
```

## Compiles and hot-reloads for development
```
npm run dev
```

## Compiles and minifies for production
```
npm run build
```

## Run your tests
```
npm run test
```

## Lints and fixes files
```
npm run lint
```

### Customize configuration(vue.config.js)
See [Configuration Reference](https://cli.vuejs.org/config/).

## elementui多级菜单参考
https://blog.csdn.net/pangji0417/article/details/93353327

## 全局样式和scoped
### &emsp;全局样式的引入有两种方式:  
  &emsp; &emsp;1.在main.js中直接导入css样式表.  
  &emsp; &emsp;2.在App.vue style中导入或直接书写,注意style标签不能加scoped,否则变成局部样式.  
### &emsp;scoped:  
  &emsp; &emsp;在组件中的style标签中加入scoped属性,当前组件的可继承的样式不会被其子组件继承,如果在  App.vue组件中不加scoped,其样式就会是全局的.

## 解决页面刷新,vuex中的数据丢失(变为初始值)
1.入口main.js中添加刷新事件监听,以username为例
```
import store from './store/store.js';
window.addEventListener('beforeunload',function(){
  localStorage.setItem('USERNMAE',store.state.username)
})

```
2.vuex的state.js中
```
let username = localStorage.getItem('USERNMAE');
export default {
  username:username?username:'孝义三郎',
}
```
3.在页面加载完毕后,删除localStorage中的USERNAME,App.vue中
```
mounted(){
  localStorage.removeItem('USERNMAE');
}
```

