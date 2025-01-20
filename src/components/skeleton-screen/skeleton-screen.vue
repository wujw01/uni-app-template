<template>
  <div @touchmove.stop :class="['skeleton-screen',{hidden:!visible}]" :style="{'padding-top':isHasHead ?  statusBarHeight+44+'px' : 0}">
      <img :src="imgUrl" class="screen-img" mode="widthFix">
  </div>
</template>

<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'SKELETON_SCREEN'

  export default {
    name: COMPONENT_NAME,
    props: {
      isHasHead: {
        default: false,
        type: [String, Boolean, Number]
      },
      imgUrl: {
        default: require('./pic-xq@2x.png'),
        type: String
      },
      visible: {
        default: true,
        type: [String, Boolean, Number]
      }
    },
    data() {
      return {}
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

  .skeleton

  .skeleton-screen
    position: fixed
    width: 100vw
    height: 100vh
    left: 0
    top: 0
    z-index: 100
    opacity: 1
    background-color: $color-white

    &.hidden
      opacity: 0
      z-index: -10
      transition all 1.5s
    .screen-img
      width: 100%
      display: block

</style>
