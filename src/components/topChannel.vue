<template>
    <div class="wrapper">
        <scroller class="scroller" scroll-direction="horizontal" loadmoreoffset="750px" show-scrollbar="false" @click="chooseChannel">
            <div class="j-uline" :style="jLPosition" ref="jcLine"></div>
            <text class="i-c c-act">推荐</text>
            <text class="i-c">限时购</text>
            <text class="i-c">新品</text>
            <text class="i-c">居家</text>
            <text class="i-c">餐厨</text>
            <text class="i-c">配件</text>
            <text class="i-c">服装</text>
            <text class="i-c">电器</text>
            <text class="i-c">洗护</text>
            <text class="i-c">杂货</text>
            <text class="i-c">餐饮</text>
            <text class="i-c">婴童</text>
            <text class="i-c">志趣</text>
        </scroller>
        <text class="more iconfont">&#xe661;</text>
    </div>
</template>

<script>
const animation = weex.requireModule('animation')
export default {
  name: 'topChannel',
  data () {
    return {
      jLPosition: {
        left: '30px',
        width: '80px'
      }
    }
  },
  mounted () {
    this.initJLine()
  },
  methods: {
    initJLine () {
      if (!this.$refs.actJC) return
      let l = this.$refs.sctJC.$el.offsetLeft
      let w = this.$refs.actJC.$el.offset.offsetWidth
      this.jLPosition = {
        left: l + 30 + 'px',
        width: w - 60 + 'px'
      }
    },
    chooseChannel (event) {
      const target = event.target
      if (target.dataset.act !== 'j-c') return
      let l = target.offsetLeft || 0
      let w = target.offsetWidth || 0
      if (w <= 0) return
      this.jLPosition = {
        left: l + 30 + 'px',
        width: w - 60 + 'px'
      }
      animation.transition(this.$refs.jcLine, {
        styles: {
          left: l + 30 + 'px',
          width: w - 60 + 'px'
        },
        duration: 300, // ms
        timingFunction: 'ease',
        delay: 0 // ms
      }, function () {})
    }

  }
}
</script>

<style scoped lang="scss">
    @import "../scss/global.scss";
    .wrapper {
        position: fixed;
        top: 114px;
        left: 0;
        right: 0;
        height: 54px;
        z-index: 10;
        background-color: $fa;
        border-bottom: 1px solid $d9;
    }
    .scroller {
        height: 54px;
        flex-direction: row;
    }
    .i-c {
        padding-top:10px;
        padding-left: 45px;
        padding-right: 45px;
        padding-bottom: 6px;
        font-size: $fz-26;
        color: $c3;
    }
    .c-act {
        color: $b4;
    }
    .j-uline {
        position: absolute;
        left: 30px;
        bottom: 0;
        width: 82px;
        height: 4px;
        background-color: $b4;
    }
    .more {
        position: absolute;
        top: 0;
        right: 0;
        height: 52px;
        width: 100px;
        background-color: $fa;
        text-align: center;
        padding-top: 10px;
        opacity: 0.96;
        @include box-shadow(-6px -4px 4px $fa);
    }
</style>
