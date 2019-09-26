<template>
	<div class='childcomponent'>
		子组件 <button @click='modifyP'>通过$emit向父组件传参,修改props</button>
		<div  v-bind="$attrs" class='qq'>
			{{pp}}
		</div>
		<button @click='forceUpdateProps'>强制修改prop</button>
		<slot v-bind:user='user' v-bind:info='info'></slot>	
		<slot name='content'></slot>
	</div>
</template>
<script>
export default {
	name: '',
	inheritAttrs:false,//配合v-bind='$attrs' 修改传递给组件的自定义是属性的位置;ture,自定义属性会加在组件的根元素上
	props:['pp'],
	customAttribute:"我是vue组件实例中的自定属性",//通过this.$options.__proto__.customAttribute来获取,vue根实例中可以this.$options.rootOption直接获取
	data () {
		return {
			user:{
				name:'xiaomingaaaa'
			},
			info:'infoaaaa'
		};
	},
	mounted (){
		// console.log(this.$options.__proto__.customAttribute)//获取自定义属性
		// console.log(this)
		
	},
	methods: {
		modifyP(){
			this.$emit('modifyp-p','jjjjjj')
		},
		forceUpdateProps(){
			this.pp = '子组件直接修改父组件传递过来的参数'
		}
	},
};
</script>
<style scoped>
</style>