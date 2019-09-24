<template>
	<div class='deconstructSoltProp'>
		<slot v-bind:users='user'>
		</slot>
	</div>
</template>
<script>
export default {
	name: 'deconstructSoltProp',
	props:[],
	data () {
		return {
			user:{
				name:'我是解构的prop值',
				age:'78'
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