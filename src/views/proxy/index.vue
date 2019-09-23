<template>
    <div>
        <p>proxy</p>
        <div @click="getData">点击获取菜谱数据</div>
        <div @click="getData1">点击获取车型数据</div>
    </div>
</template>
<script>
import QS from 'qs'
export default {
    methods:{
        getData(){
             this.axios({
                method:'post',
                url:process.env.VUE_APP_URL,
                data:{
                    menu:'土豆',
                    key:'128dc82b7fd189205ebefb544c3ddfe0'
                },
                transformRequest:[(data)=>{
                    return QS.stringify(data);
                }]
             }).then(res=>{
                console.log(res.data)
            })
        },
        getData1(){
             this.axios({
                method:'get',
                url:process.env.VUE_APP_URL1+'/api/pbl/basic_info/get_subjects',
                params:{
                    type:'ALL',
                }
             }).then(res=>{
                console.log(res.data)
            })
        }
    }
}
</script>
<style>

</style>


