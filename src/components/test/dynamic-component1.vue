<template>
   <div class='"dynamic-component1'>
       <div>动态组件{{aa}}</div>
   </div>
</template>
<script>
export default {
   name: "dynamic1",
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