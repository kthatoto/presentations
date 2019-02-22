import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Eagle from 'eagle.js'
import 'eagle.js/dist/eagle.css'
import 'animate.css'
Vue.component(Eagle.Slide.name, Eagle.Slide)
Vue.component(Eagle.Transition.name, Eagle.Transition)
Vue.use(Eagle)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
