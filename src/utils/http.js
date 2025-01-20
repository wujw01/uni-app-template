import {ERR_NO, ERR_OK} from './config'
import {hideLoading, showToast, request} from './uni-app'

class HTTP {
  static getInstance() {
    if (!this.instance) {
      this.instance = new HTTP()
    }
    return this.instance
  }

  constructor() {
    this.callback = {}
    this.config = {
      // baseUrl: process.env.VUE_APP_API,
      header: {
        'Authorization': uni.getStorageSync('token'),
        'Current-Shop': uni.getStorageSync('shopId'),
        'Mini-program': PLATFORM
      }
    }
  }

  _formatRequest(args, {method}) {
    let token = uni.getStorageSync('token')
    let shopId = uni.getStorageSync('shopId')
    if (token !== this.config.header['Authorization']) this.config.header['Authorization'] = token
    if (shopId !== this.config.header['Current-Shop']) this.config.header['Current-Shop'] = shopId
    let {url, data} = args
    // 请求前处理
    if (typeof this.callback.beforeRequest === 'function') {
      this.callback.beforeRequest(args)
    }
    // 设置请求路由
    url = `${this.config.baseUrl}${VERSION}${url}`
    let option = Object.assign({}, this.config, {url, data: data || {}, method})
    let that = this
    return new Promise((resolve, reject) => {
      uni.request({
        ...option,
        success(res) {
          res = checkStatus(res)
          // 监测请求返回的http状态
          if (res.status && res.status === ERR_NO) {
            hideLoading()
            showToast(res.message)
            console.error(url + ' <<<<<<接口请求失败>>>>> 异常提示：' + JSON.stringify(res.message))
            return false
          }
          let result = that.callback.responseFulfilled(res, args)
          // 请求完成后的逻辑处理
          if (typeof result === 'function' || result.error_code === ERR_OK) {
            resolve(res)
          } else {
            reject(res)
          }
        },
        fail(err) {
          reject(err)
        }
      })
    })
  }

  get(args) {
    return this._formatRequest(args, {method: 'GET'})
  }

  post(args) {
    return this._formatRequest(args, {method: 'POST'})
  }

  put(args) {
    return this._formatRequest(args, {method: 'PUT'})
  }

  delete(args) {
    return this._formatRequest(args, {method: 'DELETE'})
  }

  // 手动更新设置头部方法
  getHeader(args) {
    for (let [key, value] of Object.entries(args)) {
      this.config.header[key] = value
    }
  }

  // 设置回调函数
  setCallback(callback) {
    this.callback = {...this.callback, ...callback}
  }

  // 初始化函数
  init(fn) {
    fn && fn(this.config)
  }
}

// 检查http状态码
function checkStatus(response) {
  // 如果http状态码正常，则直接返回数据
  if (response && (response.statusCode < 400)) {
    return response.data || {}
    // 如果不需要除了data之外的数据，可以直接 return response.data
  }
  // 异常状态下，把错误信息返回去
  return {
    status: ERR_NO,
    message: '网络开小差'
  }
}

export default HTTP.getInstance()
