<template>
  <div class="wrapper">
    <router-view class="wrapper-inner"></router-view>
    <tab-bar @tabTo="onTabTo"></tab-bar>
  </div>
</template>

<script>
import util from './assets/util'
import tabBar from '@/components/tabBar'
export default {
  name: 'App',
  data () {
    return {}
  },
  components: {
    tabBar
  },
  created () {
    util.initIconFont()
  },
  methods: {
    onTabTo (result) {
      let key = result.data.key || ''
      this.$router && this.$router.push('/' + key)
    }
  }
}
</script>

<style lang="scss">
  .wrapper {
    &-inner {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  }
</style>
