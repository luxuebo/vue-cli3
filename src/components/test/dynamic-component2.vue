<template>
   <div class='"dynamic-component2'>
       <div>动态组件{{aa}}</div>
   </div>
</template>
<script>
export default {
   name: "dynamic2",
   props:['aa'],
   data () {
       return {
       };
   },
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