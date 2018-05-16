import Vue from 'vue'
import App from './views/App.vue'
import router from './config/router'
import SourceBlock from './components/SourceBlock.vue'

// highlight.js
import 'highlight.js/styles/github.css'
// 组件库
import alphaui from '@/alpha-ui'
import '@/alpha-ui/styles/index.scss'

Vue.config.productionTip = false

// 注册组件
Vue.component('vs-SourceBlock', SourceBlock)

Vue.use(alphaui)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
