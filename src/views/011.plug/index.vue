<template>
	<div class='plug'>
		<h1>plug插件</h1>
		<h2>1.全局方法或属性</h2>
		<div @click='getMethods'>点击获取Vue的方法或属性</div>
		<h2>2.添加全局指令</h2>
		<div v-bgcolor>自定义全局指令</div>
		<h2>3.全局mixin</h2>
		<div>{{globalMixin}}</div>
		<h2>4.添加vue实力方法或属性</h2>
		<div @click='getInstanceMethods'>点击获取实例方法或属性</div>
	</div>
</template>
<script>
import Vue from 'vue'
export default {
	name: 'plug',
	props:[],
	data () {
		return {
		};
	},
	components:{
	},
	mounted (){
	},
	methods: {
		getMethods(){
			Vue.myGlobalMethod1()//全局方法
			console.log(Vue.myGlobalattr)//全局属性
		},
		getInstanceMethods(){
			this.$myGlobalMethod();//实例方法
			console.log(this.$myGlobalattr)//实例属性
		}
	},
};
</script>
<style scoped>
</style>