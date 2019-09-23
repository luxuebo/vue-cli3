<template>
    <div class='slot02'>
        <slot>
        </slot>
        <slot name='a'>
        </slot>
        <slot name='b'>
        </slot>
        <slot name='c'>
        </slot>
    </div>
</template>
<script>
    export default{
        name:'slot02',
        components:{
        },
        data(){
            return{};
        },
        //计算属性
        computed:{},
        //监控data中的数据变化
        watch:{},
        //方法集合
        methods:{},
        //生命周期 - 创建之前
        beforeCreate(){},
        //生命周期 - 创建完成（可以访问当前this实例）
        created(){},
        //生命周期 - 挂载之前
        beforeMount(){},
        //生命周期 - 挂载完成（可以访问DOM元素）
        mounted(){},
        //生命周期 - 更新之前
        beforeUpdate(){},
        //生命周期 - 更新之后
        updated(){},
        //生命周期 - 销毁之前
        beforeDestroy(){},
        //生命周期 - 销毁完成
        destroyed(){},
        //如果页面有keep-alive缓存功能，这个函数会触发
        activated(){},
        }
    </script>
<style scoped>
</style>