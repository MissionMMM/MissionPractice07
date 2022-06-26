<template>
  <div>
    <div>
      <router-link to="/">首页</router-link>
      <router-link to="/zz">看什么，走啊</router-link>
      <router-link to="/sb">走啥，给我看</router-link>
      <router-link to="/rz">走马观花</router-link>
    </div>

    <!-- 占位符：主动查看地址栏，到配置文件中找到路径对应得组件，加载 -->
    <router-view/>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>