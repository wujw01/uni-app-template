<template>
  <div class="empty">
    <div class="container" :style="{'margin-top':marginTop}">
      <img v-if="image" :src="image" :style="{width:imgWidth + 'px',height:imgWidth + 'px', 'padding-top': paddingTop +'px'}" class="no-cont-icon">
      <div v-if="tip" class="tip-text">{{tip}}</div>
      <div v-if="tipSub" class="tip-sub-text">{{tipSub}}</div>
      <div v-if="buttonText" class="go-btn" :style="buttonStyle" @click="btnGo">{{buttonText}}</div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'EMPTY',
    props: {
      // 标题
      tip: {
        type: String,
        default: ''
      },
      tipSub: {
        type: String,
        default: ''
      },
      buttonText: {
        type: String,
        default: ''
      },
      url: {
        type: String,
        default: '/pages/home'
      },
      imgWidth: {
        type: Number,
        default: null
      },
      image: {
        type: String,
        default: require('./pic-miss@2x.png')
      },
      paddingTop: {
        type: Number,
        default: 0
      },
      buttonStyle: {
        type: String,
        default: ''
      },
      marginTop: {
        type: String,
        default: ''
      }
    },
    methods: {
      btnGo() {
        const url = this.url
        this.$checkIsTabPage(url) ? wx.switchTab({ url }) : wx.navigateTo({ url })
      }
    }
  }
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
  /*@import "~@design"*/
  .empty
    width: 100%
    height: 100%
    font-family: $font-family-regular
    text-align: center
    display: flex
    flex-direction column
    align-items center
    box-sizing: border-box

    .container
      display: flex
      flex-direction column
      justify-content center
      align-items: center
      margin-top: px-change-vh(62)

    .no-cont-icon
      width: 200px
      height: 180px

    .tip-text
      text-align: center
      font-family $font-family-regular
      color: $color-text-sub
      font-size: $font-size-14
      margin-top: 15px

    .tip-sub-text
      text-align: center
      margin-top: 10px
      color: $color-text-assist
      font-size: $font-size-12

    .go-btn
      font-size: $font-size-14
      color: $color-white
      background-color $color-main
      letter-spacing: 1px
      text-align: center
      width: 140px
      height: 40px
      line-height: 40px
      border-radius: 20px
      margin-top: 23px
</style>
