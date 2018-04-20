<template>
    <div class="wrapper">
        <home-header></home-header>
        <top-channel></top-channel>
        <scroller :class="['main-list', isIpx && isIpx() ? 'ml-ipx': '']" offset-accuracy="300" loadmoreoffset="300" @loadmore="onloadmore">
            <refresher @loadingDown="loadingDown"></refresher>
        </scroller>
    </div>
</template>

<script>
import homeHeader from '@/components/header'
import topChannel from '@/components/topChannel'
import refresher from '@/components/refresh'
export default {
  name: 'home',
  components: {
    homeHeader,
    topChannel,
    refresher
  },
  methods: {
    onloadmore () {},
    loadingDown () {}
  }
}
</script>

<style scoped lang="scss">
    .main-list {
        position: fixed;
        top: 168px;
        bottom: 90px;
        left: 0;
        right: 0;
    }
    .ml-ipx {
        top: 208px;
        bottom:140px;
    }
</style>
