<template>
    <div class="com-one">
        <h1>组件1</h1>
        <!-- <button @click="count++">{{count}}</button> -->
        
        <p>共享的count:{{$store.state.count}}</p>
        <button @click="$store.state.count++">count+1</button>

        <!-- 把值存储在公共的区域，就可以在多个组件中使用 -->
        <button @click="showVue">查看vue对象</button>

        <hr>
        <!-- 如何触发 store 中的 mutations 里的方法?commit -->
        <button @click="$store.commit('cartAdd','大傻逼')">把傻逼加入购物车</button>
        <button @click="$store.commit('cartAdd','阉鸡')">把阉鸡加入购物车</button>
        <button @click="$store.commit('cartAdd','土狗')">把土狗加入购物车</button>
    </div>
</template>

<script>
    export default {
        methods: {
            showVue() {
                console.log(this);
            }
        },
        data() {
            return {
                count: 1
            }
        },
    }
</script>

<style lang="scss" scoped>
.com-one{
    background-color: brown;
    height: 300px;
    margin-bottom: 20px;
}
</style>