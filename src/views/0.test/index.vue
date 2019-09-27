<template>
  <fragment>
    <h1 class="fsty">1.子父组件传参</h1>
    <div>
      <ChildComponent :pp="param" @modifyp-p="modifypp" class="haha" :is-dd="content">
        <template v-slot:default="{user,info}">
          <!--插槽作用域:可以使用组件data -->
          <h1 style="color:pink;">{{user.name}}</h1>
          {{info}}
        </template>
        <template v-slot:[content]>
          <!--动态指令插槽 -->
          <div>content000000000000</div>
        </template>
      </ChildComponent>
    </div>
    <h1 class="fsty">2.自定义ui组件</h1>
    <div>
      <lxb-button @click="onClick">确定</lxb-button>
      <lxb-button @click="onClick" bgcolor="#409eff" color="#fff">确定</lxb-button>
      <lxb-button @click="onClick" bgcolor="#67c23a" color="#fff">成功</lxb-button>
      <lxb-button @click="onClick" bgcolor="#e6a23c" color="#fff">警告</lxb-button>
      <lxb-button @click="onClick" bgcolor="#f56c6c" color="#fff">危险</lxb-button>
    </div>

    <div>
      <label>Input:</label>
      <lxb-input v-model="input1" placeholder="请输入信息"></lxb-input>
    </div>
    <h1 class="fsty">3.使用jquery</h1>
    <div id="jq"></div>
    <h1 class="fsty">4.全局自动化注册组件</h1>
    <base-one></base-one>
    <base-header></base-header>
    <h1 class="fsty">5.测试scoped</h1>
    <Test/>
    <h1 class="qq fsty">6.scss文件</h1>
    <div v-html="hml"></div>
    <h1 class="fsty">7.数组的更新检测</h1>
    <p>{{ dataList[0] }}</p>
    <p>length:{{ dataList.length }}</p>
    <button @click="changeDataList">点击改变数组的值</button>
    <h1>8.对象的变更检测</h1>
    <p>{{ object.region.proice.name }}:{{ object.pp}}--{{object.type}} --{{object.region.proice.age}}</p>
    <button @click="changeObject">点击修改键值</button>
    <h1>9.v-for 为什么要使用key</h1>
    <!-- key的值要和数据关联才会有作用，否则无效，以下例子的key使用的是数据中的id属性，不能使用遍历数据数组的下标作为key，其作用是使数据和dom关联起来。-->
    <h4>9.1不使用key</h4>
    <div>
      <input type="text" v-model="name">
      <button @click="add">添加</button>
    </div>
    <ul>
      <li v-for="(item) in list">
        <input type="checkbox">
        {{item.name}}
      </li>
    </ul>
    <h4>9.2使用key</h4>
    <div>
      <input type="text" v-model="name1">
      <button @click="add1">添加</button>
    </div>
    <ul>
      <li v-for="(item) in list1" :key="item.id">
        <input type="checkbox">
        {{item.name}}
      </li>
    </ul>
    <h1>10.动态组件</h1>
    <button
      v-for="tab in tabs"
      v-bind:key="tab"
      v-bind:class="['tab-button', { active: currentTab === tab }]"
      v-on:click="switchTabs(tab)"
    >{{ tab }}</button>
    <component v-bind:is="currentTabComponent" class="tab" :aa='aa'></component>
  </fragment>
</template>
<script>
// import '../../style/test.scss';
import Vue from "vue";
const ChildComponent = () => import("../../components/test/ChildComponent"); //局部注册的异步组件,只有改组件需要渲染的时候才加载
import Test from "../../components/test/Test"; //非异步组件
import dynamic1 from "../../components/test/dynamic-component1";
import dynamic2 from "../../components/test/dynamic-component2";

export default {
  data() {
    return {
      content: "content",
      param: "woshifather",
      input1: "haha",
      messageList: ["12", "23", "34"],
      hml:
        '<p v-on:click="vHtml">v-html:不能使用vue的语法,如v-bind,v-on,等</p>',
      dataList: ["q", "w"],
      object: {
        region: {
          proice: {
            name: "hebei"
          }
        },
        type: "hao"
      },
      name: "",
      name1: "",
      newId: 3,
      newId1: 3,
      list: [
        { id: 1, name: "李斯" },
        { id: 2, name: "吕不韦" },
        { id: 3, name: "嬴政" }
      ],
      list1: [
        { id: 1, name: "李斯1" },
        { id: 2, name: "吕不韦1" },
        { id: 3, name: "嬴政1" }
      ],
      currentTab: "dynamic1",
      tabs: ["dynamic1", "dynamic2"],
      aa:''
    };
  },
  computed: {
    currentTabComponent: function() {
      return this.currentTab.toLowerCase();
    }
  },
  mounted() {
    let str = '<div id="jquerClickHandler">绑定jquery点击事件</div>';
    $("#jq").html(str);
    let that = this;
    $("#jquerClickHandler").click(function() {
      console.log("jquery 事件");
    });
    //数组的更新检测
    // this.dataList[0] = '改变dataList[0]';//视图可以更新
    //this.dataList.length = 3;//视图可以更新

    //对象的变更检测
    // this.object.region.proice.name = 'henan';//视图可以更新
    // this.object.pp = 'pp'//可以添加属性
  },
  components: {
    ChildComponent,
    Test,
    dynamic1,
    dynamic2
  },
  methods: {
    onClick(e) {
      console.log(e);
    },
    modifypp(value) {
      this.param = value;
    },
    vHtml() {
      console.log("点击了v-html中的事件");
    },
    changeDataList() {
      //1.改变数组元素使视图更新
      //方式一:
      // this.$set(this.dataList,0,'改变dataList[0]');
      //方式二:
      // this.dataList.splice(0,1,'改变dataList[0]')
      //方式三:
      //this.dataList[0] = '改变dataList[0]';
      // this.$forceUpdate()
      //方式四:
      // this.dataList[0] = '改变dataList[0]';
      // this.dataList.splice(this.dataList.length)
      //2.使数组长度为响应式的
      //this.dataList.splice(1);//只能减少长度,不能增加长度
    },
    changeObject() {
      //对象的更新检测
      //1.修改属性值可以更新视图
      // this.object.region.proice.name = 'henan';
      //2.添加属性不可以更新视图(Vue 不允许动态添加根级别的响应式属性)
      // this.object.region.proice.age = '100';
      //3.通过Vue.set()添加对象属性
      // this.$set(this.object.region.proice,'age',100)
    },
    add() {
      //注意这里是unshift
      this.list.unshift({ id: ++this.newId, name: this.name });
      this.name = "";
    },
    add1() {
      //注意这里是unshift
      this.list1.unshift({ id: ++this.newId1, name: this.name1 });
      this.name1 = "";
    },
    switchTabs(tab){
      this.currentTab = tab;
      this.aa = tab;
    }
  }
};
</script>
<style scoped lang="scss">
@import "../../style/test.scss";
.fsty {
  color: orange;
}
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>