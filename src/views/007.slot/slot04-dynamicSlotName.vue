<template>
	<div class='dynamicSlotName'>
		<slot name='one'>

		</slot>
		<slot name='two'>

		</slot>
		<slot v-bind:users='user' name='three'>
		</slot>
		
	</div>
</template>
<script>
export default {
	name: 'dynamicSlotName',
	props:[],
	data () {
		return {
			user:{
				name:'动态插槽名prop'
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