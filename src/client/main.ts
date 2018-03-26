import Vue from 'vue'
import Login from './views/login/Login.vue'
import router from './config/router'
import store from './config/store'
import alphaui from '@/alpha-ui'
import '@/alpha-ui/styles/index.scss'

Vue.config.productionTip = false;

Vue.use(alphaui)

new Vue({
  router,
  store,
  render: h => h(Login),
}).$mount('#app')
