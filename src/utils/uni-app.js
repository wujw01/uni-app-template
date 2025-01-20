export function request(option) {
  return new Promise((resolve, reject) => {
    uni.request({...option, success: resolve, fail: reject})
  })
}

export function login() {
  return new Promise((resolve, reject) => {
    uni.login({success: resolve, fail: reject})
  })
}

export function getUserInfo() {
  return new Promise((resolve, reject) => {
    uni.getUserInfo({success: resolve, fail: reject})
  })
}

export function setStorage(key, value) {
  return new Promise((resolve, reject) => {
    uni.setStorage({key: key, data: value, success: resolve, fail: reject})
  })
}

export function getStorage(key) {
  return new Promise((resolve, reject) => {
    uni.getStorage({key: key, success: resolve, fail: reject})
  })
}

export function getLocation(type = 'gcj02', callback) {
  return new Promise((resolve, reject) => {
    uni.getLocation({type: type, success: resolve, fail: reject, complete: callback})
  })
}

export function openLocation(data) {
  return new Promise((resolve, reject) => {
    uni.openLocation({...data, success: resolve, fail: reject})
  })
}

export function showLoading(title = '加载中') {
  if (uni.showLoading) {
    uni.showLoading({
      title: title,
      mask: true
    })
  } else {
    uni.showNavigationBarLoading()
  }
}

export function hideLoading() {
  if (uni.hideLoading) {
    uni.hideLoading()
  } else {
    uni.hideNavigationBarLoading()
  }
}

/**
 * 弹出提示框
 */

export function tipSuccess(title, duration = 500) {
  uni.showToast({
    title: title,
    image: '/static/img/icon-global_success@2x.png',
    mask: true,
    duration: duration
  })
  if (duration > 0) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, duration)
    })
  }
}

/**
 * 微信页面滚动
 * @param scrollTop
 * @param duration
 */
export function pageScrollTo(scrollTop = 0, duration = 0) {
  uni.pageScrollTo({
    scrollTop,
    duration
  })
}

/**
 * 设置系统剪贴板的内容
 * @param data
 * @returns {Promise<any>}
 */
export function setClipboardData(data) {
  return new Promise((resolve, reject) => {
    uni.setClipboardData({data: data, success: resolve, fail: reject})
  })
}

/**
 * 获取系统剪贴板内容
 * @returns {Promise<any>}
 */
export function getClipboardData() {
  return new Promise((resolve, reject) => {
    uni.getClipboardData({success: resolve, fail: reject})
  })
}

export function makePhoneCall(data) {
  return new Promise((resolve, reject) => {
    uni.makePhoneCall({phoneNumber: data, success: resolve, fail: reject})
  })
}

/**
 * 选择照片
 * @returns {Promise<any>}
 */
export function chooseImage(data = {count: 1, sizeType: ['original', 'compressed'], sourceType: ['album', 'camera']}) {
  return new Promise((resolve, reject) => {
    uni.chooseImage({
      ...data,
      // count, // 默认9
      // sizeType, // 可以指定是原图还是压缩图，默认二者都有 ['original', 'compressed']
      // sourceType, // 可以指定来源是相册还是相机，默认二者都有 ['album', 'camera']
      success: resolve,
      fail: (err) => {
        reject(err)
      }
    })
  })
}

/**
 * 选择预览图片
 * @returns {Promise<any>}
 */
export function previewImage(data = {urls: [], current: ''}) {
  return new Promise((resolve, reject) => {
    uni.previewImage({
      ...data,
      // current, // 当前显示图片的http链接
      // urls, // 需要预览的图片http链接列表
      success: resolve,
      fail: (err) => {
        reject(err)
      }
    })
  })
}

/**
 * canvasContext.draw 将之前在绘图上下文中的描述（路径、变形、样式）画到 canvas 中。
 * @returns {Promise<any>}
 */
export function draw(ctx, reserve = false) {
  return new Promise((resolve, reject) => {
    ctx.draw(reserve, (res) => {
      if (res.errMsg === 'drawCanvas:ok') {
        resolve(res)
      } else {
        reject(res)
      }
    })
  })
}

/**
 * 把当前画布指定区域的内容导出生成指定大小的图片，并返回文件路径
 * @returns {Promise<any>}
 */
export function canvasToTempFilePath(data, ctx) {
  return new Promise((resolve, reject) => {
    uni.canvasToTempFilePath({
      ...data,
      success: resolve,
      fail: reject
    }, ctx)
  })
}

/**
 * 保存图片到系统相册
 * @returns {Promise<any>}
 */
export function saveImageToPhotosAlbum(data = {filePath: ''}) {
  return new Promise((resolve, reject) => {
    uni.saveImageToPhotosAlbum({
      ...data,
      success: resolve,
      fail: (err) => {
        reject(err)
        setTimeout(() => {
          uni.openSetting()
        }, 1000)
      }
    })
  })
}

/**
 * 下载文件
 * @returns {Promise<any>}
 */
export function downloadFile(data = {url: ''}) {
  return new Promise((resolve, reject) => {
    uni.downloadFile({
      ...data,
      success: resolve,
      fail: reject
    })
  })
}

/**
 * 获取设备信息
 * @returns {Promise<any>}
 */
export function getSystemInfo() {
  return new Promise((resolve, reject) => {
    uni.getSystemInfo({
      success: resolve,
      fail: reject
    })
  })
}

/**
 * 全局toast
 * @returns {Promise<any>}
 */
export function showToast(title, duration = 1500, mask = true, icon = 'none') {
  if (!title) return
  uni.showToast({title, icon, duration, mask})
}

// 检查登录态是否过期。
export function checkSession() {
  return new Promise((resolve, reject) => {
    uni.checkSession({
      success: resolve,
      fail: reject
    })
  })
}
// 支付方式。
export function payWayFor (payRes) {
  let config = {}
  let method = 'requestPayment'
  switch (process.env.VUE_APP_PLATFORM) {
    case 'mp-baidu':
      method = 'requestPolymerPayment'
      config = {
        bannedChannels: payRes.banned_channels,
        orderInfo: {
          'dealId': payRes.deal_id,
          'appKey': payRes.app_key,
          'totalAmount': payRes.total_amount,
          'tpOrderId': payRes.tp_order_id,
          'dealTitle': payRes.deal_title,
          'signFieldsRange': payRes.sign_fields_range,
          'rsaSign': payRes.rsa_sign,
          'bizInfo': payRes.biz_info
        }
      }
      break
    case 'mp-weixin':
      const { timestamp, nonceStr, signType, paySign } = payRes
      config = {
        timeStamp: timestamp,
        nonceStr,
        package: payRes.package,
        signType,
        paySign
      }
      break
    default :
      break
  }
  return new Promise((resolve, reject) => {
    wx[method]({...config, success: resolve, fail: reject})
  })
}
