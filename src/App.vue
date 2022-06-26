<template>
  <div>
    <!-- Vuex模块：全局状态共享 -->
    <!-- 在多个 .vue 文件中，共享数据的技术 -->
    <com-one />
    <com-two />
    <com-three/>
  </div>
</template>

<script>
import ComOne from "./components/ComOne.vue";
import ComThree from './components/ComThree.vue';
import ComTwo from "./components/ComTwo.vue";
export default {
  components: { ComOne, ComTwo, ComThree },
};
</script>

<style lang="scss" scoped>
</style>