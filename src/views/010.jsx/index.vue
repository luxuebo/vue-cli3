<template>
	<div class='jsxdemo'>
		<h1>JSX</h1>
		<renderTemplate />
	</div>
</template>
<script>
	/*
	jsx:模板语法
	 */
import demo from './demo';
let renderTemplate = {
	render:function(h){
		return(
			<div>
				<demo level={1}>
				</demo>
				<span>hellow </span>world
			</div>
		)
	}
}
export default {
	name: 'jsxdemo',
	props:[],
	data () {
		return {
		};
	},
	components:{
		renderTemplate
	},
	mounted (){
	},
	methods: {
	},
};
</script>
<style scoped>
</style>