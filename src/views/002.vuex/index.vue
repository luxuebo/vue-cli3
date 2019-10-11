<template>
    <div class='vuex'>
        <p>state方式获取state</p>
        <div><span>{{username}} </span><span> {{age}}</span></div>
        <p>getters方式获取state</p>
        <div><span>{{getUsername}} </span><span> {{getAge}}</span></div>
        <p>mutations方式更新state</p>
        <div><span @click='clickModifyState'>点击更新</span></div>
        <p>actions方式异步更新state</p>
        <div><span @click='clickAsyncModifyState'>点击更新</span></div>
    </div>
</template>
<script>
import { mapState,mapGetters,mapMutations,mapActions } from "vuex"
export default {
    name:'vuex',
    data(){
        return{
        }
    },
    computed:{
        ...mapState(['username','age']),
        ...mapGetters(['getUsername','getAge'])

    },
    methods:{
        ...mapMutations(["updateUsername",'updateAge','undateTest']),
        ...mapActions(["asyncUpdateUsername"]),
        clickModifyState(){
            this.updateUsername('花和尚')
            this.undateTest('test1')

        },
        clickAsyncModifyState(){
            this.asyncUpdateUsername('玉麒麟')
        }

    },
}
</script>
<style>

</style>


