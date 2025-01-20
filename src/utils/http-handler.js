import HTTP from './http'
import {ERR_OK} from './config'
import {hideLoading, showLoading, showToast} from './uni-app'

HTTP.init(config => {
  config.baseUrl = process.env.VUE_APP_API
  config.header['Mini-program'] = PLATFORM
})
HTTP.setCallback({
  // 请求前处理
  beforeRequest({loading = true}) {
    if (loading) {
      showLoading()
    }
  },
  // 请求拦截
  willRequest(request) {
    return request
  },
  // 响应拦截
  willResponse(response) {
    return response
  },
  // 请求完成后的逻辑处理
  responseFulfilled(res, {url, loading = true, toast = true, doctor}) {
    // 可自定义处理loading
    if (typeof loading === 'function') {
      loading(res)
    } else if (loading) {
      hideLoading()
    }
    // 错误码处理
    if (res.error_code !== ERR_OK) {
      //  处理错误码
      errorCodeHandle(res.error_code)
      // 吐司处理,可自定义化处理
      if (typeof toast === 'function') {
        toast(res)
      } else if (toast) {
        showToast(res.message)
      }
      console.error(url + ' <<<<<<接口异常>>>>> 异常提示：' + JSON.stringify(res.message))
      // 错误回调处理 async/await必须传doctor错误处理方法，可以为空方法
      if (typeof doctor === 'function') {
        doctor(res, url)
        return doctor
      } else {
        return res
      }
    }
    return res
  }
})

// 错误码处理
function errorCodeHandle(code) {
  switch (code) {
    default:
      break
  }
}
