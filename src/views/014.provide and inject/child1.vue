<template>
   <div class='child1'>
      <p>子组件child1</p>
     <div> {{foo}}</div>
     <button @click='modify'>点击在child1中修改</button>
     <p>{{bar}}</p>
   </div>
</template>
<script>
export default {
   name: "child1",
   inject:['foo'],
   data () {
       return {
          bar:this.foo
       };
   },
   components:{
   },
   mounted (){
   },
   methods:{
      modify(){
         this.bar = '哈哈.修改了';
        
      }
   },
}
</script>
<style scoped>
</style>