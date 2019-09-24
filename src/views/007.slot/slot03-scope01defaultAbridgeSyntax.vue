<template>
	<div class='defaultAbridgeSyntax'>
		<slot v-bind:users='user'>
		</slot>
		<slot name='other'>
		</slot>
	</div>
</template>
<script>
/*
默认插槽的缩写语法不能和具名插槽混用，因为它会导致作用域不明确:
<!-- 无效，会导致警告 -->
<defaultAbridgeSyntax v-slot="slotProps">
  {{ slotProps.users.name }}
  <template v-slot:other="otherSlotProps">
    slotProps is NOT available here
  </template>
</defaultAbridgeSyntax>
只要出现多个插槽，请始终为所有的插槽使用完整的基于 <template> 的语法：
<defaultAbridgeSyntax>
  <template v-slot:default="slotProps">
    {{ slotProps.users.name }}
  </template>

  <template v-slot:other="otherSlotProps">
    ...
  </template>
</defaultAbridgeSyntax>
 */
export default {
	name: 'defaultAbridgeSyntax',
	props:[],
	data () {
		return {
			user:{
				name:'aa',
				age:20
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