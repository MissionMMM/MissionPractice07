import Vue from 'vue'
import VueRouter from 'vue-router'
import SouceBoom from '../views/SouceBoom.vue'
import Dick from '../views/Dick.vue'
import Hao from '../views/Hao.vue'
import NotFound from '../views/NotFound.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

// routes：在这里设置路径和组件的对应关系
// {地址：'xx市xx小区xx楼xx号',souceboom家}
const routes = [
  // 首页
  {
    path:'/',// /是根路径
    component:Home
  },
  {
    // 通配符：*，匹配任何找不到的路径
    path:'*',
    component:NotFound
  },
  {
    path:'/zz',//路径 localhost:8080/zz
    // 对应的组件是谁
    component:SouceBoom
  },
  {
    path:'/rz',//路径 localhost:8080/zz
    // 对应的组件是谁
    component:Dick
  },
  {
    path:'/sb',//路径 localhost:8080/zz
    // 对应的组件是谁
    component:Hao
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
