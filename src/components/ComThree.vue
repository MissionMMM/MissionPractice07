<template>
    <div class="com-three">
        <h1>组件3</h1>
        <p>{{count}},{{uname}},{{cart}}</p>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
    export default {
        // mutations是存函数，在methods中引入
        methods: {
            // 引入vuex里的方法，然后直接用就可以
            ...mapMutations(['cartAdd'])
        },

        // 语法糖：快速在计算属性中引入 store.state 中的变量
        computed:{
            // mapState:会自动遍历数组中的元素，生成计算属性 --
            // 对原理感兴趣的看扩展视频 -- 百度网盘(未录制)
            ...mapState(['count','uname','cart']),
        }
    }
</script>

<style lang="scss" scoped>
.com-three{
    background-color: pink;
    height: 300px;
}
</style>