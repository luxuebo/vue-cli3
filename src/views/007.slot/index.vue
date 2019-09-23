<template>
   <div class='studey-slot'>
      <h1>slot插槽</h1>
      <h2>1.插槽基本使用</h2>
      <slot01>
         <p>123</p>
         {{name}}
      </slot01>
      <h2>2.具名插槽</h2>
      <slot02>
         <template>
            <div>我是默认插槽</div>
         </template>
         <template v-slot:a>
            <div>我是具名插槽a</div>
         </template>
         <template v-slot:b>
            <div>我是具名插槽b</div>
         </template>
         <template v-slot:c>
            <div>我是具名插槽c</div>
         </template>
      </slot02>
      <h2>3.作用域插槽</h2>
      <slot03>
         <template v-slot:default="slotDefaultProps">
            {{slotDefaultProps.users.name}}
         </template>
         <template v-slot:a="slotDefaultProps1">
           <p> {{slotDefaultProps1.users1.age}}</p>
         </template>
      </slot03>
   </div>
</template>
<script>
import slot01 from './slot01'
import slot02 from './slot02-name'
let slot03 = ()=>import('./slot03-scope');


export default {
   name: "studey-slot",
   data () {
       return {
          name:'haha'
       };
   },
   components:{
      slot01,
      slot02,
      slot03
   },
   mounted (){
   },
   methods:{
   },
}
</script>
<style scoped>
</style>