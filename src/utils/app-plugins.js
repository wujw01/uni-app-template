import Vue from 'vue'
import store from '@/store/store'
import {ERR_OK} from './config'
import base from '@/mixins/base'
import routes from '@/utils/routes'
import * as $uniapp from './uni-app'
import API from '@/api'
// 定义插件
const AppPlugin = {
  install: function () {
    Vue.mixin(base)
    Vue.prototype.$API = API
    Vue.prototype.$ERR_OK = ERR_OK
    Vue.prototype.$imageUrl = process.env.VUE_APP_IMAGE
    Vue.prototype.$store = store
    Vue.prototype.$routes = routes
    Vue.prototype.$uniapp = $uniapp
  }
}
// 使用插件
Vue.use(AppPlugin)
// 捕捉网络变化
// uni.onNetworkStatusChange(function (res) {
//   console.log(res)
  // getApp().globalData.isConnected = res.isConnected
  // if (!res.isConnected) {
  //   const options =uni.getLaunchOptionsSync()
  //   if (options.path === routes.main.ERROR) {
  //     return
  //   }
    // uni.redirectTo({url: routes.main.ERROR})
  // }
  // console.error(res.isConnected, typeof res.isConnected, '是否有网络连接')
// })
// wx.onMemoryWarning(function (res) {
//   console.warn('onMemoryWarningReceive', res)
// })
