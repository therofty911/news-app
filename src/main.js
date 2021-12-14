import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/style.css'
import './registerServiceWorker'

import GoogleAuth from '@/config/google_oAuth.js'
const gauthOption = {
  clientId: '435912762255-ocmrg74vef1endohtrjbcroo8vvfiila.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}
Vue.use(GoogleAuth, gauthOption)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
