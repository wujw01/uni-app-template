import request from '@/utils/http'

export default {
  // 请求接口
  getList(args) {
    const url = `/index`
    return request.get({ url, ...args })
  }
}
