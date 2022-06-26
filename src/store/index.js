import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 到main.js查看：store在vue初始化时会注入到vue对象里
export default new Vuex.Store({
  // 严格模式下：不允许直接修改state中的值，必须特殊申请，才可以使用
  // 效果：会报错，但依然能改
  strict:true,//严格模式：真
  // 5个核心属性
  // 状态：存储共享的数据项
  state: {
    count:1,
    uname:'大傻逼',
    // 存储购物车的数据
    cart:['猪大强','羊大肠','藤原翔'],
  },
  getters: {
  },
  // 存储方法，用来修改state中的值
  mutations: {
    // 用于向cart属性里，添加值
    cartAdd(state,user){
      // 参数1：固定的state,代表共享的数据
      // 其他参数看情况，比如此处要传递增加的用户是谁
      state.cart.push(user) //数组新增数据到末尾
    },
    countAdd1(state){
      // 固定的参数1：即共享的数据们
      state.count++
    },
  },
  actions: {
  },
  modules: {
  }
})
