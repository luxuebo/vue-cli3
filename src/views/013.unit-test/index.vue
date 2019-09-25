<template>
  <div>
    <h1>{{ message }}</h1>
    <h3 class='textleft title2'>1.安装</h3>
    <div class='textleft title21'>方式一:再用cli3初始化项目的时候,选择测试工具</div>
    <div class='textleft title21'>方式二:cli3初始化时没有选择测试工具,需要手动安装</div>
    <div class='textleft title211'>1.将以下内容放到package.json的devDependencies中</div>
    <p class='textleft title2111'>"@vue/cli-plugin-unit-jest": "^3.11.0",<br>
      "@vue/test-utils": "1.0.0-beta.29",<br>
      "babel-core": "7.0.0-bridge.0",<br>
      "babel-jest": "^23.6.0",<br>
      "vue-template-compiler": "^2.6.10"</p>
    <h3 class="textleft title2">2.根路径下新建jest.config.js文件和unit-test/index.test.js</h3>
    <h3 class="textleft title2">3.package.json的script中加入以下内容</h3>
    <div class="textleft title211">"test": "vue-cli-service test:unit"</div>
    <h3 class="textleft title2">4.参考文档</h3>
    <div class="textleft title211"><a href="https://vue-test-utils.vuejs.org/zh/guides/testing-single-file-components-with-jest.html">Vue Test utils</a></div>
    <div class="textleft title211"><a href="https://jestjs.io/docs/zh-Hans/getting-started">jest 文档</a></div>
  </div>

</template>

<script>
  export default {
    data () {
      return {
        message: 'hello!'
      }
    },
    created () {
      this.message = '单元测试(jest)'
    }
  }
</script>
<style lang='scss' scoped>
  .textleft{
    text-align: left;
  }
  .title21{
    padding:5px 0 5px 10px;
  }
  .title211{
    padding:5px 0 5px 20px;
  }
   .title2111{
    padding:5px 0 5px 30px;
  }
  a{
    color:skyblue;
    text-decoration: underline;
  }
</style>