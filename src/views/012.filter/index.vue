<template>
	<div class='filter'>
		<h1>filter过滤器</h1>
		<h2>1.局部过滤器filter</h2>
		<div>{{message|capitalize}}</div>
		<h2>2.全局过滤器filter</h2>
		<div :id='message|upperCase'>{{message|upperCase|addNum}}</div>
	</div>
</template>
<script>
/*
过滤器可以用在两个地方：双花括号插值和 v-bind 表达式 (后者从 2.1.0+ 开始支持)
1.在双花括号中:
{{message|capitalize}}
2.在 `v-bind`中
<div v-bind:id="message | upperCase"></div>
3.过滤器可以串联
{{message|upperCase|addNum}}
 */
import {capitalize} from '../../filter'
export default {
	name: 'cus-filter',
	props:[],
	data () {
		return {
			message:'qwerdf'
		};
	},
	filters:{
		capitalize
	},
	components:{
	},
	mounted (){
	},
	methods: {
	},
};
</script>
<style scoped>
</style>