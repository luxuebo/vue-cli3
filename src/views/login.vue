<template>
    <div class='login'>
        <span class='lg' @click='clickLogin'>{{titile}}</span>
        <div id='jq'>jquery</div>
    </div>
</template>
<script>
export default {
    name:'login',
    data(){
        return{
            titile:'登陆'
        }
    },
    mounted(){
        $('#jq').html('jquery0000');
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
    color:red;
    .lg{
        cursor: pointer;
    }
    #jq{
        margin-top: 100px;
    }
}
</style>



