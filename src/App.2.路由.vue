<template>
  <div>
    <!-- 使用路由系统，需要生成项目时必须勾选 Router 选项 -->

    <!-- 
      组件现在有2种用途：
        - 1. 组成页面的一部分，存储在 components 目录里
        - 2. 被路由切换：存储在 views 目录里
     -->

    <div class="box">
      <!-- 路由的占位符：不是真正显示的内容，在运行时会被替换 -->
      <p>下面是router占位符内容</p>
      <router-view />
      <p>上面是router占位符内容</p>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>