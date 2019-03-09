import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './plugins/vuelidate'
import './plugins/vue2-filters'
import './plugins/vue-typed'


import { version } from '../package.json'
console.log(`App version: ${version}`)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
