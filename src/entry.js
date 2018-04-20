/* global Vue */

/* weex initialized here, please do not move this line */
import App from '@/index.vue'
import router from './router'
import * as filters from '@/filters'
import mixins from '@/mixins'

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// register global mixins
Vue.mixin(mixins)

/* eslint-disable no-new */
new Vue(Vue.util.extend({el: '#root', router}, App))
router.push('/')
