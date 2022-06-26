<template>
    <div>
        <h1>我是TNND爱情</h1>
        <!-- 作者好心：在HTML中自动帮你加上this，你可以不写this -->
        <p>我今年:{{$route.query.age}}</p>
        <p>我喜欢:{{$route.query.like}}</p>
        <button @click="showParams">查看路由参数</button>
    </div>
</template>

<script>
    export default {
        methods: {
            showParams() {
                // $route:中存储了路由参数
                // fullPath：路径+参数
                // path:路径
                // query：参数对象
                console.log(this);
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>