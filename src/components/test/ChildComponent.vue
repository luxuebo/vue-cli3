<template>
	<div class='childcomponent'>
		子组件 <span @click='modifyP'>点击修改参数</span>
		<div  v-bind="$attrs" class='qq'>
			{{pp}}
		</div>
		<slot v-bind:user='user' v-bind:info='info'></slot>	
		<slot name='content'></slot>
	</div>
</template>
<script>
export default {
	name: '',
	inheritAttrs:false,
	props:['pp'],
	data () {
		return {
			user:{
				name:'xiaomingaaaa'
			},
			info:'infoaaaa'
		};
	},
	mounted (){
		
	},
	methods: {
		modifyP(){
			this.$emit('modifyp-p','jjjjjj')
		}
	},
};
</script>
<style scoped>
</style>