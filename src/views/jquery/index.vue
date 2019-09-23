<template>
   <div class='jquery'>
      <h3 id="text"></h3>
   </div>
</template>
<script>
/* 
在vue.config.js文件中添加:
configureWebpack: {

   plugins: [

      new webpack.ProvidePlugin({

      $:"jquery",

      jQuery:"jquery",

      "windows.jQuery":"jquery"

      })

   ]

}
*/
export default {
   name: "component_name",
   data () {
       return {
       };
   },
   components:{
   },
   mounted (){
      $('#text').html('Jquery')
   },
   methods:{
   },
}
</script>
<style scoped>
</style>