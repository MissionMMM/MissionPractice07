<template>
    <div>
        <h1>姓名:{{$route.query.name}}</h1>
        <p>手机号:{{$route.query.phone}}</p>
        <p>年龄:{{$route.query.age}}</p>
        <button @click="getRoute">查询路由讯息</button>
    </div>
</template>

<script>
    export default {
        methods: {
            getRoute() {
                console.log(this);
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>