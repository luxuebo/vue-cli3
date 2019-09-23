<template>
    <div class='login'>
        <el-card class="box-card" :body-style='{padding:"15px"}'>
            <el-form label-position="right" label-width="80px" :model="formLabelAlign">
                <el-form-item label="用户名">
                    <el-input v-model="formLabelAlign.username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="formLabelAlign.password"></el-input>
                </el-form-item>
            </el-form>
             <el-button type="primary" native-type='button' @click='clickLogin' style='width: 100%'>登录</el-button>
             <div><router-link tag='div' to="/test">go to test page</router-link></div>
        </el-card>
    </div>
</template>
<script>
export default {
    name:'login',
    data(){
        return{
            formLabelAlign:{
                username:'',
                password:''
            },
            titile:'登陆',
            input1:'哈哈'
        }
    },
    methods:{
        clickLogin(){
            this.$router.push({path:'/home'});
        }   
    }  
}
</script>
<style scoped lang="scss">
.login{
    background:url('../assets/images/2.jpg') no-repeat;
    background-size: 100% 100%;
    width:100%;
    height: 100%;
    display: flex;
    justify-content:center;
    align-items:center;
    position: absolute;
    top:0;
    bottom: 0;
    .box-card{
        width:400px;
        height:200px;
    }
    
}
</style>



