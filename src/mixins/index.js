/**
 * @stream 实现网络请求
 * @param api 地址
 * @param callback 回调函数
 * @auhthor dsw
 * @date 2018/4/20
 */
let stream = weex.requireModule('stream')
export default {
  methods: {
    jump (to) {
      this.$router && this.$router.push(to)
    },
    isIpx () {
      return weex && (weex.config.env.deviceModel === 'iPhone10,3' || weex.config.env.deviceModel === 'iPhone10,6')
    },
    GET (api, callback) {
      return stream.fetch({
        method: 'GET',
        type: 'json',
        url: api
      }, callback)
    }
  }
}
