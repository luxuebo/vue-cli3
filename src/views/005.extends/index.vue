<template>
   <div class='extends'>
      <h3>extends</h3>
      <div>{{loading}}</div>
   </div>
</template>
<script>
import extend1 from '../../extend/extend1.js'
export default {
   name: "extends",
   extends:extend1,
   data () {
       return {
       };
   },
   components:{
   },
   mounted (){
      //调用继承的methods
      this.showLoading()
   },
   methods:{
   },
}
</script>
<style scoped>
</style>