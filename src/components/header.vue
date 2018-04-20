<template>
    <div class="wrapper">
        <div class="scan">
            <text class="scan-icon iconfont">&#xe689;</text>
            <text class="scan-text">扫一扫</text>
        </div>
        <text class="search-icon iconfont" @click="jumpWeb()">&#xe65c; 搜索商品，共8888款好物</text>
        <div class="notice">
            <text class="notice-icon iconfont">&#xe70a;</text>
            <text class="notice-text">消息</text>
        </div>
    </div>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style scoped lang="scss">
    @import "../scss/global.scss";
    .wrapper {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        height: 114px;
        padding-top: 44px;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: space-around;
        z-index: 101;
        background-color: $fa;
        opacity: 0.99;
    }
    .scan, .notice {
        height: 80px;
        width: 96px;
        &-text {
            font-size: $fz-18;
        }
    }
    .scan, .notice, .search {
        &-icon, &-text {
            text-align: center;
            color: $c6;
            font-weight: 300;
        }
    }
    .scan-icon {
        font-size: $fz-32;
    }
    .search-icon {
        flex: 1;
        height: 60px;
        font-size: $fz-26;
        padding-top: 13px;
        background-color: $ed;
        @include border-raduis(8px);
    }
</style>
