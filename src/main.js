import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// 为什么能共享：
// 因为vue对象就一个 是有所.vue文件共同的this
// 所以：只要存储在vue对象里，所以.vue都能用
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
