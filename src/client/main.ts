import Vue from 'vue';
import Login from './views/login/Login.vue';
import router from './config/router';
import store from './config/store';
import Alphaui from '@/alpha-ui'

Vue.config.productionTip = false;

Vue.use(Alphaui)

new Vue({
  router,
  store,
  render: h => h(Login),
}).$mount('#app');
