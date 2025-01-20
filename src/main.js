import Vue from 'vue'
import App from './App'
import '@/utils/app-plugins'
import 'utils/http-handler'

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
console.warn(process.env.VUE_APP_ENV, VERSION)
