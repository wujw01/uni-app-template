const concurrently = require('concurrently')
let [a1 = ''] = process.argv.filter((itm, idx) => idx > 1)

concurrently([
  `cross-env NODE_ENV=development UNI_PLATFORM=mp-weixin vue-cli-service uni-build --watch ${a1}`,
  `cross-env NODE_ENV=development UNI_PLATFORM=mp-toutiao vue-cli-service uni-build --watch ${a1}`,
  `cross-env NODE_ENV=development UNI_PLATFORM=mp-baidu vue-cli-service uni-build --watch ${a1}`,
  `cross-env NODE_ENV=development UNI_PLATFORM=h5 vue-cli-service uni-build --watch ${a1}`
])
