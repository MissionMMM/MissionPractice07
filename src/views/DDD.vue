<template>
    <div>
        <!-- 面试常考题：说一说$route里query和params属性的区别 -->
        <!-- 传统方式传参：？语法，存放在query里 -->
        <!-- 新式传参：：参数名.. 存储在params里 -->
        
        <h1>真踏🐎傻逼</h1>
        <p>年龄:{{$route.params.age}}</p>
        <p>手机号:{{$route.params.phone}}</p>
        <p>妻子:{{$route.params.wife}}</p>
        <button @click="showParams">查看路由参数</button>
        <p>{{age}},{{phone}},{{wife}}</p>
    </div>
</template>

<script>
    export default {
        // 语法糖：直接用props声明属性接受路由参数
        // 此语法糖默认不开启，需要在路由配置中手动开启
        props:['age','phone','wife'],

        methods: {
            showParams() {
                console.log(this.$route);
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>