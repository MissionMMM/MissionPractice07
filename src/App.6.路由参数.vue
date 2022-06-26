<template>
  <div>
    <!-- 路由组件的传参 -->
    <!-- URL的参数语法  路径？参数=值&参数=值... -->
    <router-link to='/dolove?age=20&like=吃屎'>爱情攻防战</router-link>
    <router-link to='/dolove?age=28&like=摆烂'>摆烂王</router-link>

    <router-link to='/about?name=大摆锤&phone=13333333333&age=33'>来吧</router-link>

    <!-- 新式传参语法 -->
    <router-link to="/ddd/23/18878787878/大傻逼">进去把!</router-link>

    <!-- 路由占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>