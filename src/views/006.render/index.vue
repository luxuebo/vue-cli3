<template>
  <div class="render">
    <h1>render函数</h1>
    <global-render :level="4">全局注册的render函数组件</global-render>
    <part-render/>
  </div>
</template>
<script>
let partRender = {
  render: function(createElement) {
    return createElement(
      "div",
      {
        class: {
          foo: true,
          bar: true
        },
        style: {
          color: "red",
          fontSize: "14px"
        },
        attrs: {
          id: "foo"
        },
        on: {
          click: this.partClickHandler
        }
      },
      ["我是局部注册的render组件", createElement("p")]
    );
  },
  methods: {
    partClickHandler() {
      console.log("局部注册的render函数组件的点击事件");
    }
  }
};
export default {
  name: "render",
  data() {
    return {};
  },
  components: {
    partRender
  },
  mounted() {},
  methods: {}
};
</script>
<style scoped>
</style>