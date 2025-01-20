module.export = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'script'
  },
  // required to lint *.vue files
  plugins: ['vue', 'html'],
  env: {
    browser: false,
    node: true,
    es6: true
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  'rules': {
    // 允许箭头函数不使用圆括号
    'arrow-parens': 0,
    // 开发模式允许使用console
    'no-console': 0,
    // debugger使用
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // allow async-await
    'generator-star-spacing': 0,
    'eol-last': 0,
    'space-before-function-paren': 0,
    // 不允许使用var变量
    'no-var': 2,
    // 不允许重复声明变量
    'no-redeclare': [2, {builtinGlobals: true}]
  },
  globals: {
    App: true,
    Page: true,
    wx: true,
    swan: true,
    tt: true,
    my: true,
    getApp: true,
    getPage: true,
    requirePlugin: true,
    getCurrentPages: true
  }
}
