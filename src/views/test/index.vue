<template>
	<fragment>
		<h1>1.子父组件传参</h1>
		<div>
			{{ppp.o}}测试页
			<ChildComponent :pp='param' @modifyp-p='modifypp' class='haha' is-dd>
				<template v-slot:default='{user,info}'><!--插槽作用域:可以使用组件data -->
					<h1 style="color:pink;">{{user.name}}</h1>
					{{info}}
				</template>
				<template v-slot:[content]><!--动态指令插槽 -->
					<div>content000000000000</div>
				</template>
				
			</ChildComponent>
		</div>
		<h1>2.自定义ui组件</h1>
		<div>
            <lxb-button  @click="onClick">确定</lxb-button>
            <lxb-button  @click="onClick" bgcolor="#409eff" color="#fff">确定</lxb-button>
            <lxb-button  @click="onClick" bgcolor="#67c23a" color="#fff">成功</lxb-button>
            <lxb-button  @click="onClick" bgcolor="#e6a23c" color="#fff">警告</lxb-button>
            <lxb-button  @click="onClick" bgcolor="#f56c6c" color="#fff">危险</lxb-button>
        </div>
       
         <div>
            <label>Input: </label>
            <lxb-input
            v-model="input1"
            placeholder="请输入信息">
            </lxb-input>
        </div>
        <h1>3.使用jquery</h1>
        <div id='jq'></div>
        <base-one></base-one>
        <base-header></base-header>

	</fragment>
</template>
<script>
	const ChildComponent = ()=>import('../../components/test/ChildComponent')//局部注册的异步组件
	// import ChildComponent from '../components/test/ChildComponent';
	export default{
		data(){
			return{
				ppp:{
					o:1234
				},
				content:'content',
				param:'woshifather',
				input1:'haha',
				messageList:['12','23','34']
			}
		},
		mounted(){
			var str = '<div id="ww" @click="wowo()">yyyyy</div>'
        	$('#jq').html(str);
        	$("#ww").click(function(){
        		console.log('wwwww1')
        	})	
    	},
		components:{
			ChildComponent
		},
		methods:{
			onClick(e){
            	console.log(e)
        	},
        	modifypp(value){
        		this.param = value;
        	}
		}
	}
</script>
<style>
	
</style>