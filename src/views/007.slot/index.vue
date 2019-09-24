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

      <h3>2.01具名插槽缩写</h3>
      <slot0201>
         <template #header>
           <p>缩写header</p>
         </template>
          <template #footer>
           <p>缩写footer</p>
         </template>
      </slot0201>

      <h2>3.作用域插槽</h2>
      <slot03>
         <template v-slot:default="slotDefaultProps">
            {{slotDefaultProps.users.name}}
         </template>
         <template v-slot:a="slotDefaultProps1">
           <p> {{slotDefaultProps1.users1.age}}</p>
         </template>
      </slot03>

      <h3>3.01作用域插槽(独占默认插槽的缩写语法)</h3>
      <slot0301>
         <template v-slot="slotProps">
            {{slotProps.users.name}}
         </template>
      </slot0301>

      <h3>3.02作用域插槽(解构插槽prop)</h3>
      <slot0302>
         <template v-slot="{users}">
            {{users.name}}
         </template>
      </slot0302>

      <h2>4.动态插槽名</h2>
      <slot04>
         <template :slot='dynamicSlotName.one'>
           <div>动态插槽名one</div>
         </template>
         <template :slot='dynamicSlotName.two'>
           <div>动态插槽名two</div>
         </template>
         <template v-slot:[dynamicSlotName.three]='slotProps'>
           <div>{{slotProps.users.name}}</div>
         </template>
      </slot04>

   </div>
</template>
<script>
import slot01 from './slot01'
import slot02 from './slot02-name'
import slot0201 from './slot02-name01abbreviation'//具名插槽缩写
let slot03 = ()=>import('./slot03-scope');//异步组件
import slot0301 from './slot03-scope01defaultAbridgeSyntax'
import slot0302 from './slot03-scope02deconstructSoltProp'
import slot04 from './slot04-dynamicSlotName'


export default {
   name: "studey-slot",
   data () {
       return {
         name:'haha',
         dynamicSlotName:{
            one:'one',
            two:'two',
            three:'three'
         },
       };
   },
   components:{
      slot01,
      slot02,
      slot0201,
      slot03,
      slot0301,
      slot0302,
      slot04
   },
   mounted (){
   },
   methods:{
   },
}
</script>
<style scoped lang="scss">
h2{
   background-color: #aaa;
}
h3{
   background-color: #ddd;
}
</style>