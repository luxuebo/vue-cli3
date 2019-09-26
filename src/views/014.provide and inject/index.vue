<template>
  <div class="provideInject">
    <h1>provide/inject</h1>
    <button v-on:click="modifyProvide">点击修改provide变量值</button>
    <div>
      <child1/>
    </div>
  </div>
</template>
<script>
/*
提示：provide 和 inject 绑定并不是可响应的。这是刻意为之的。然而，如果你传入了一个可监听的对象，那么其对象的属性还是可响应的.

作用:
1.使用provide给子组件的props提供默认值
2.使用provide的值作为数据入口,赋值给子组件的data
3.所有子组件公用常量
*/
const child1 = () => import("./child1");
export default {
  name: "provideInject",
  provide: {
    foo: "我父组件的provide变量值",
  },
  data() {
    return {
    };
  },
  components: {
    child1
  },
  mounted() {
  },
  methods: {
    modifyProvide: function() {
      this._provided.foo = "在父组件中修改provide的foo变量值"; 
     
    }
  }
};
</script>
<style scoped>
</style>