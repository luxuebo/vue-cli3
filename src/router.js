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
      component: () => import('./views/test/index.vue')
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
      component: () => import('./views/vuex/index.vue')
    },
    {
      path: '/proxy',
      meta:{
        name:'使用代理'
      },
      component: () => import('./views/proxy/index.vue')
    },
    {
      path: '/jquery',
      meta:{
        name:'使用jquery'
      },
      component: () => import('./views/jquery/index.vue')
    },
    {
      path: '/extends',
      meta:{
        name:'使用extends'
      },
      component: () => import('./views/extends/index.vue')
    },
    {
      path: '/elementui',
      meta:{
        name:'elementui页面'
      },
      component: () => import('./views/elementuipage/index.vue'),
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
