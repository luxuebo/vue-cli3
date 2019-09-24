<template>
	<div class='name01abbreviation'>
		<slot>
		</slot>
		<slot name='header' v-bind:users='user'>
		</slot>
		<slot name='footer' v-bind:users='user'>
		</slot>
	</div>
</template>
<script>
export default {
	name: 'name01abbreviation',
	props:[],
	data () {
		return {
			user:{

			}
		};
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