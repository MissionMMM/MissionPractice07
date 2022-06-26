<template>
  <div>
    <!-- 作业 -->
    <p>{{ "how old are you" | upper }}</p>
    <p>{{ "are you creazy?" | upper }}</p>
    <!-- pow：算次幂,2的10次方 -->
    <p>{{ 2 | pow(10) }}</p>
    <p>{{ 2 | pow(3) }}</p>
    <!-- 练习：add过滤器，计算数字的总和 -->
    <p>{{10|add(20,30)}}</p>
    <!-- 过滤器可以连着用 -->
    <p>{{3|pow(2)|add(89,11)}}</p>
  </div>
</template>

<script>
  export default {
    // 配置项
    filters:{
      add(value,a,b){
        return value+a+b
      },
      pow(value,exp){
        return Math.pow(value,exp)
      },
      upper(value){
        return value.toUpperCase()
      },
    }
  }
</script>

<style lang="scss" scoped>
</style>