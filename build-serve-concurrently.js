// eg::  npm run serve -- --v2 --dev --mp-weixin
// eg::  npm run serve -- --v2 --dev

// 统一输出打包命令
const concurrently = require('concurrently')
let arr = process.argv.filter((itm, idx) => idx > 1)

const ENV = ['--dev', '--release', '--prod', '--local']
let env = 'development' // 不传参数默认为dev环境
let version = '' // 不传参数默认为无版本
let cmd = '' // 运行命令
let platform = ['mp-weixin', 'mp-toutiao', 'mp-baidu', 'h5'] // 默认打包平台参数
let concurrentlyArr = platform.map((child) => { // 打包命令，默认打包四个平台
  return `cross-env NODE_ENV=${env} UNI_PLATFORM=${child} vue-cli-service ${cmd} uni-build --watch ${version}`
})

arr.forEach((item) => {
  // 环境
  if (ENV.includes(item)) {
    switch (item) {
      case '--dev':
        env = 'development'
        break
      case '--release':
        env = 'development'
        cmd = '--mode release'
        break
      case '--local':
        env = 'development'
        cmd = '--mode local'
        break
      case '--prod':
        env = 'production'
        break
      default :
        // 不传参数默认为dev环境
        env = 'development'
        break
    }
  }
  // 版本
  if (item.includes('--v')) version = item
  // 平台
  if (item.includes('--mp')) {
    concurrentlyArr = [`cross-env NODE_ENV=${env} UNI_PLATFORM=${item.slice(2)} vue-cli-service ${cmd} uni-build --watch ${version}`]
  }
})

concurrently(concurrentlyArr)
