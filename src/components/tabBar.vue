<template>
    <div :class="['dcb-nav', isIpx && isIpx() ? 'w-ipx' : '']">
        <div class="dcb-nav-item" @click="tabTo('home')">
            <text class="dcb-nav-icon iconfont" :class="[this.isActive('home')]">&#xe660;</text>
            <text class="dcb-nav-text" :class="[this.isActive('home')]">首页</text>
        </div>
        <div class="dcb-nav-item" @click="tabTo('topic')">
            <text class="dcb-nav-icon iconfont" :class="[this.isActive('topic')]">&#xe744;</text>
            <text class="dcb-nav-text" :class="[this.isActive('topic')]">专题</text>
        </div>
        <div class="dcb-nav-item" @click="tabTo('class')">
            <text class="dcb-nav-icon iconfont" :class="[this.isActive('class')]">&#xe605;</text>
            <text class="dcb-nav-text" :class="[this.isActive('class')]">分类</text>
        </div>
        <div class="dcb-nav-item" @click="tabTo('shop')">
            <text class="dcb-nav-icon iconfont" :class="[this.isActive('shop')]">&#xe61a;</text>
            <text class="dcb-nav-text" :class="[this.isActive('shop')]">购物</text>
        </div>
        <div class="dcb-nav-item" @click="tabTo('my')">
            <text class="dcb-nav-icon iconfont" :class="[this.isActive('my')]">&#xe639;</text>
            <text class="dcb-nav-text" :class="[this.isActive('my')]">个人</text>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      active: 'home'
    }
  },
  methods: {
    // 选中选项
    isActive (index) {
      return this.active === index ? 'dcb-nav-active' : ''
    },
    tabTo (key) {
      if (this.active === key) return
      this.active = key
      this.$emit('tabTo', {
        status: 'tabTo',
        data: {
          key: key
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
    @import "../scss/global.scss";
    .dcb {
        &-nav {
            height: 90px;
            background-color: $fa;
            border-top: 1px solid $d9;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            flex-wrap: nowrap;
            flex-direction: row;
            justify-content: space-around;

            &-item {
                flex: 1;
            }
            &-icon, &-text {
                color: $c6;
                text-align: center;
            }
            &-icon {
                font-size: 38px;
                padding-top: $pt-14;
            }
            &-text {
                font-size: $fz-22;
                padding-top: $pt-2;
            }
            &-active {
                color: $b4;
            }
        }
    }
    .w-ipx {
        height: 140px;
    }
</style>
