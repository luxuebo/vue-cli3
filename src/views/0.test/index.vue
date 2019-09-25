<template>
	<fragment>
		<h1 class="fsty">1.子父组件传参</h1>
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
		<h1 class="fsty">2.自定义ui组件</h1>
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
        <h1 class="fsty">3.使用jquery</h1>
        <div id='jq'></div>
        <h1 class="fsty">4.全局自动化注册组件</h1>
        <base-one></base-one>
        <base-header></base-header>
        <h1 class="fsty">5.测试scoped</h1>
        <Test />
		<div class="qq">scss文件</div>
		<div v-html="hml">123</div>
	</fragment>
</template>
<script>
// import '../../style/test.scss';
	import Vue from 'vue'
	const ChildComponent = ()=>import('../../components/test/ChildComponent')//局部注册的异步组件,只有改组件需要渲染的时候才加载
	import Test from '../../components/test/Test';//非异步组件
	export default{
		data(){
			return{
				ppp:{
					o:1234
				},
				content:'content',
				param:'woshifather',
				input1:'haha',
				messageList:['12','23','34'],
				hml:'<p v-on:click="vHtml">v-html</p>'
			}
		},
		mounted(){
			let str = '<div id="ww" @click="wowo()">yyyyy</div>'
        	$('#jq').html(str);
        	let that = this;
        	$("#ww").click(function(){
        		// that.$myMethod();//实例方法
        		// Vue.myGlobalMethod()//全局方法
        		// Vue.myGlobalMethod1()
        		// Vue.myGlobalMethod2()
        		// Vue.myGlobalMethod3()
        		// that.$myGlobalMethod()
        	})
        	

    	},
		components:{
			ChildComponent,
			Test
		},
		methods:{
			onClick(e){
            	console.log(e)
        	},
        	modifypp(value){
        		this.param = value;
			},
			vHtml(){
				console.log('点击了v-html中的事件')
			}
		}
	}
</script>
<style scoped lang="scss">
@import '../../style/test.scss';
	.fsty{
		color:orange;
	}
</style>