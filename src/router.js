import Vue from 'vue'
import Router from 'vue-router'
import login from './views/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: login
    },
    {
      path: '/test',
      meta:{
        name:'测试页'
      },
      component: () => import('./views/0.test/index.vue')
    },
    {
      path: '/home',
      meta:{
        name:'首页'
      },
      component: () => import('./views/home.vue')
    },
    {
      path: '/vuex',
      meta:{
        name:'使用vuex'
      },
      component: () => import('./views/002.vuex/index.vue')
    },
    {
      path: '/proxy',
      meta:{
        name:'使用代理'
      },
      component: () => import('./views/003.proxy/index.vue')
    },
    {
      path: '/jquery',
      meta:{
        name:'使用jquery'
      },
      component: () => import('./views/004.jquery/index.vue')
    },
    {
      path: '/extends',
      meta:{
        name:'使用extends'
      },
      component: () => import('./views/005.extends/index.vue')
    },
    {
      path: '/render',
      meta:{
        name:'使用extends'
      },
      component: () => import('./views/006.render/index.vue')
    },
    {
      path: '/slot',
      meta:{
        name:'slot插槽'
      },
      component: () => import('./views/007.slot/index.vue')
    },
    {
      path: '/cus-directive',
      meta:{
        name:'自定义指令'
      },
      component: () => import('./views/008.cus-directive/index.vue')
    },
    {
      path: '/mixin',
      meta:{
        name:'mixin混入'
      },
      component: () => import('./views/009.mixin/index.vue')
    },
    {
      path: '/jsx',
      meta:{
        name:'jsx'
      },
      component: () => import('./views/010.jsx/index.vue')
    },
    {
      path: '/plug',
      meta:{
        name:'plug'
      },
      component: () => import('./views/011.plug/index.vue')
    },
    {
      path: '/filter',
      meta:{
        name:'filter过滤器'
      },
      component: () => import('./views/012.filter/index.vue')
    },
    {
      path: '/elementui',
      meta:{
        name:'elementui页面'
      },
      component: () => import('./views/001.elementuipage/index.vue'),
      children: [
        {
          path: 'menuHome',
          meta:{
            name:'首页'
          },
          component: () => import('./components/elementui/Home.vue')
        },
        {
          path: '/elementui/wechartuser',
          name:'1211',
          meta:{
            name:'微信用户'
          },
          component: () => import('./components/elementui/WechartUser.vue')
        },
        {
          path: '/elementui/menumanage',
          meta:{
            name:'菜单管理'
          },
          component: () => import('./components/elementui/MenuManage.vue')
        },
        {
          path: '/elementui/phonebusiness',
          meta:{
            name:'手机业务'
          },
          component: () => import('./components/elementui/PhoneBusiness.vue')
        },
        {
          path: '/elementui/enterprisebusiness',
          meta:{
            name:'企业业务'
          },
          component: () => import('./components/elementui/EnterpriseBusiness.vue')
        },
        {
          path: '/elementui/companybusiness',
          meta:{
            name:'公司业务'
          },
          component: () => import('./components/elementui/CompanyBusiness.vue')
        },
        {
          path: '/elementui/moneymanage',
          meta:{
            name:'钱包管理'
          },
          component: () => import('./components/elementui/MoneyManage.vue')
        },
        {
          path: '/elementui/transactionquery',
          meta:{
            name:'交易查询'
          },
          component: () => import('./components/elementui/TransactionQuery.vue')
        }
      ]
    },
    {
      path: '*',
      meta:{
        name:'404页面'
      },
      component: () => import('./components/NotFound.vue')
    }
  ]
})
