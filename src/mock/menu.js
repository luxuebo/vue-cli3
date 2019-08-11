export var menuTreeData = [{
  "menuId": 1000,
  "menuName": "首页",
  "parentId": 0,
  "route": '/elementui/menuHome',
  "type": 0,
  "icon": "el-icon-setting",
  "orderNum": 0,
  },{
  "menuId": 1,
  "menuName": "系统管理",
  "parentId": 0,
  "route": null,
  "type": 0,
  "icon": "el-icon-setting",
  "orderNum": 0,
  "children": [{
    "menuId": 2,
    "menuName": "微信用户",
    "parentId": 1,
    "parentName": "系统管理",
    "route": "/elementui/wechartuser",
    "type": 1,
    "icon": "el-icon-service",
    "orderNum": 1,
    "children": []
  },
  {
    "menuId": 3,
    "menuName": "菜单管理",
    "parentId": 1,
    "parentName": "系统管理",
    "route": "/elementui/menumanage",
    "type": 1,
    "icon": "el-icon-news",
    "orderNum": 2,
    
  }
  ]
},
{
  "menuId": 441,
  "menuName": "任务查看",
  "parentId": 0,
  "route": null,
  "type": 0,
  "icon": "el-icon-news",
  "orderNum": 2,
  "children": [
    {
      "menuId": 442,
      "menuName": "个人业务",
      "parentId": 441,
      "parentName": "任务查看",
      "route": null,
      "type": 1,
      "icon": "el-icon-news",
      "orderNum": 1,
      "children": [
        {
          "menuId": 443,
          "menuName": "手机业务",
          "parentId": 441,
          "parentName": "个人业务",
          "route": "/elementui/phonebusiness",
          "type": 2,
          "icon": "el-icon-news",
          "orderNum": 1,
          "children": []
        }]
    },
    {
      "menuId": 444,
      "menuName": "企业业务",
      "parentId": 441,
      "parentName": "任务查看",
      "route": '/elementui/enterprisebusiness',
      "type": 1,
      "icon": "el-icon-news",
      "orderNum": 1,
    },
    {
      "menuId": 7,
      "menuName": "公司业务",
      "parentId": 441,
      "parentName": "任务查看",
      "route": "/elementui/companybusiness",
      "type": 1,
      "icon": "el-icon-news",
      "orderNum": 1,
      "children": []
    }]
},
{
  "menuId": 4,
  "menuName": "个人中心",
  "parentId": 0,
  "route": null,
  "type": 0,
  "icon": "el-icon-news",
  "orderNum": 2,
  "children": [
    {
      "menuId": 5,
      "menuName": "个人管理",
      "parentId": 4,
      "parentName": "个人中心",
      "route": null,
      "type": 1,
      "icon": "el-icon-news",
      "orderNum": 1,
      "children": [
        {
          "menuId": 6,
          "menuName": "钱包管理",
          "parentId": 5,
          "parentName": "个人管理",
          "route": "/elementui/moneymanage",
          "type": 2,
          "icon": "el-icon-news",
          "orderNum": 1,
          "children": []
        }]
    },
    {
      "menuId": 7,
      "menuName": "交易查询",
      "parentId": 5,
      "parentName": "个人中心",
      "route": "/elementui/transactionquery",
      "type": 1,
      "icon": "el-icon-news",
      "orderNum": 1,
      "children": []
    }]
}]
