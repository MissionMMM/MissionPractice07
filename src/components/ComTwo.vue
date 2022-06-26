<template>
    <div class="com-two">
        <h1>组件2</h1>
        
        <!-- Vuex的基本原理：把数据共享，多个组件都使用共享数据 -->

        <!-- 开启严格模式 -->
        <button @click="$store.state.count--" :disabled="$store.state.count==0">count-1</button>

        <!-- $store提供了一个 commit(委托) 方法,委托store执行mutations中的函数 -->
        <button @click="$store.commit('countAdd1')">count+1</button>
        <hr>
        <div v-for="(item,i) in $store.state.cart" :key="i">
            {{ item }}
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.com-two{
    height: 300px;
    background-color: aquamarine;
}
</style>