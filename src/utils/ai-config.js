export default class DefaultMsg {
  constructor(obj) {
    const userInfo = wx.getStorageSync('userInfo') || {}
    this.event_no = 0 // 事件号
    this.log_type = 0
    this.goods_id = 0 // 商品id
    this.activity_id = 0 // 活动id
    this.flow_id = 0
    // this.store_id = 0
    // this.merchant_id = 0
    this.shop_id = wx.getStorageSync('shopId') || 0 // 团长id
    this.customer_id = userInfo.id || 0 // 客户id
    this.total = '' // 金额等
    this.title = '' // 标题等
    this.customer_name = userInfo.id ? userInfo.nickname : '游客' // 客户名称
    this.from_customer_id = 0
    this.user_info = {}
    this.avatar = userInfo.avatar || ''
  }

  static create() {
    return new this()
  }

  set(obj = {}) {
    Object.assign(this, obj)
    return this
  }
}
