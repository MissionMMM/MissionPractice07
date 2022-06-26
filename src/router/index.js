// vrouter
import Vue from 'vue';
import VueRouter from 'vue-router';
// 非懒加载语法：提前引入组件，不管用户是否使用
// 适合访问频繁的页面，提前加载到内存里，用户访问时速度更快，体验好
// 浪费内存，提升用户体验
import Home from '../views/Home.vue';

Vue.use(VueRouter);

// 组件的两种引入方式
const routes = [
  {
    // 新式传参语法，把传统的？参数=值&参数=值 拆分
    // 通过：代表参数名
    path: '/ddd/:age/:phone/:wife',
    name: 'routeName',
    props:true, // 默认值false，true就代表允许用props接收路由参数
    component: () => import('../views/DDD.vue'),
  },
  {
    path: '/about',
    name: 'routeName',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/dolove',
    name: '执行爱',
    component: () => import('../views/DoLove.vue'),
  },

  // 懒加载写法用vr能自动生成
  {
    path: '/rz',
    name: 'routeName', // 给这段路由关系起个名字，调试时使用
    component: () => import('../views/Dick.vue'),
  },
  { path: '/', component:Home },
  // 懒加载引入方式
  // 优点：不会提前加载组件到内存，不会浪费额外的资源
  // 例如：1个网站有100个页面，如果用户只访问了10个
  // -懒加载方案：只需要用到10个的时候加载，剩余90个不用加载
  { path: '/zz', component: () => import('../views/SouceBoom.vue') },
  { path: '/sb', component: () => import('../views/Hao.vue') },
  {
    path: '*',
    name: '404',
    component: () => import('../views/NotFound.vue'),
  },
]

export const router = new VueRouter({
  base: process.env.BASE_URL,
  mode: 'history',
  routes,
});

export default router