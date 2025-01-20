<template>
    <div class="home">
        <skeleton-screen :visible="FirstLoading" :imgUrl="imgUrl"></skeleton-screen>
    </div>
</template>

<script type="text/ecmascript-6">
  // import * as Helpers from './helpers'
  import SkeletonScreen from "@/components/skeleton-screen/skeleton-screen"

  const PAGE_NAME = "HOME"
  export default {
    name: PAGE_NAME,
    components: {
      SkeletonScreen
    },
    data() {
      return {
      }
    },
    onLoad() {
    },
    onShow() {
    },
    onPullDownRefresh() {
    },
    onShareAppMessage() {
    },
    methods: {

    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "../../../design/variable.styl"

</style>
