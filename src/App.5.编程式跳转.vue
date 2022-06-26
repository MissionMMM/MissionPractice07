<template>
  <div>
    <!-- 路由系统：通过路径的变化，切换页面上显示的组件 -->
    <!-- SPA：单页应用，网页只有index.html,通过局部的组件切换实现多页的效果，速度更快，体验更好 -->

    <!-- 最终展示的时 a 标签，此方式切换路径不会造成页面刷新 -->
    <router-link to="/">首页</router-link>
    <router-link to="/zz">来啊~小姐姐</router-link>
    <router-link to="/rz">来呀~老嫂子</router-link>
    <router-link to="/sb">来呀~小妹妹</router-link>
    <!-- 编程式跳转：通过JS代码方式触发跳转 -->
    <div>
      <button @click="goS">SM取向转换</button>
      <button @click="goBack">上一页</button>
      <button @click="goOn">下一页</button>
    </div>

    <!-- 路由占位符：主动检测浏览器地址栏的路径，根据路径到配置文件中找到相关的组件，进行展示 -->
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    goS() {
      // main.js 中实例化Vue对象时，会注入router路由对象
      console.log(this);
      // $router：就是注入到vue中的router对象
      // 这里包含了所有操作路由相关的方法
      // push：推.
      // 数组的push：推入一个新的元素到数组末尾
      // git的push：把代码上传到服务器
      // 路由的push：把新的页面推到浏览器的地址栏

      // 编程式跳转：不能重复跳转到相同的路径

      // 做判断：获取当前路径信息
      // $route: 当前所在路径的相关信息
      if (this.$route.path != "/sb") {
        this.$router.push("/sb");
      }
    },
    goBack() {
      // 上一页
      // go(n):n=0刷新 n>0前进n页  n<0后退n页
      this.$router.go(-1)
    },
    goOn(){
      this.$router.go(1)
    }
  },
};
</script>

<style lang="scss" scoped>
a {
  display: inline-block;
  text-decoration: none;
  font-size: 1.5em;
  margin: 10px;
  color: #777;
  transition: 0.3s;

  &:hover {
    color: orange;
  }

  // 作者提供了active动态样式代表谁是当前项
  &.router-link-exact-active {
    transform: scale(1.1);
    background-color: orange;
    color: white;
    border-radius: 5px;
    padding: 5px;
  }
}
</style>