<template>
  <div>
    <!-- 点击方式做跳转 -->
    <div id="nav">
      <!-- 区别：a的跳转会刷新整个页面，观察标签栏 -->
      <!-- router-link：局部刷新，而不是整个页面 -- 体验更好，速度快 -->

      <!-- 之前用a标签跳转 -->
      <a href="/zz">zz</a>
      <!-- 现在：vue中要求用router-link代替a -->
      <router-link to="/rz">看什么，走啊</router-link>
      <router-link to="/">首页</router-link>
      <router-link to="/zz">看什么，走啊</router-link>
      <router-link to="/sb">看什么，走啊</router-link>
    </div>

    <!-- 占位符：主动查地址栏的路径，然后到配置文件中找路径对应的组件 -> 展示 -->
    <router-view />
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
a{
  text-decoration: none;
  color:rgb(173, 96, 255);
  display: inline-block;
  padding: 10px;
  border:3px solid pink;
  margin: 10px;
  transition: 0.3s;
  
  // 作者提前制作了阿激活时的高亮样式，可以直接使用
  // 样式分两种：精确的(exact)和模糊的
  // 精确版最常用
  &.router-link-exact-active{
    background-color: aqua;
    color: #000;
    border: 3px solid aqua;
    border-radius: 3px;
  }

  &:hover{
    background-color: orange;
    border:3px solid orange;
    color: white;
    border-radius: 10px;
    transform: scale(1.1);
  }
}
</style>