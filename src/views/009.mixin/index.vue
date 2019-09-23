<template>
   <div class='mixin-demo'>
      <h1>mixin混入</h1>
      {{mixin02}}
   </div>
</template>
<script>
/* 
混入对象和组件选项合并的规则:
1.数据对象在内部会进行递归合并，并在发生冲突时以组件数据优先
2.同名钩子函数将合并为一个数组，因此都将被调用。另外，混入对象的钩子将在组件自身钩子之前调用
*/ 
import {mixin01,mixin02} from '../../mixin/mixin01.js'
export default {
   name: "mixindemo",
   data () {
       return {
       };
   },
   mixins:[mixin01,mixin02],
   components:{
   },
   mounted (){
   },
   methods:{
   },
}
</script>
<style scoped>
</style>
