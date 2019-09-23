# cli3app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### elementui多级菜单参考
https://blog.csdn.net/pangji0417/article/details/93353327

### 全局样式和scoped
全局样式的引入有两种方式:  
	1.在main.js中直接导入css样式表.  
	2.在App.vue style中导入或直接书写,注意style标签不能加scoped,否则变成局部样式.
scoped:  
	在组件中的style标签中加入scoped属性,当前组件的可继承的样式不会被其子组件继承,如果在App.vue组件中不加scoped,其样式就会是全局的.

