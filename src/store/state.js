let username = localStorage.getItem('USERNMAE');//防止刷新页面vuex中的username丢失

export default {
    username:username?username:'孝义三郎',
    age:'36',
    tabsList:[],//所有打开的路由
    activeIndex:'' //激活状态
  }