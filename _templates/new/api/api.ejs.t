---
to: "src/api/<%= h.inflection.dasherize(name) %>.js"
---
import request from '@utils/http'

export default {
  /**
     * 模板
     * @param data
     * @param loading
     * @returns {*}
  */
  demo(args) {
      const url = ``
      return request.get({ url, ...args })
  },
}