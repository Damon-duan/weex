/* global Vue */
import Router from 'vue-router'
import viewHome from '@/view/home'
import viewTopic from '@/view/topic'
import viewClass from '@/view/class'
import viewShop from '@/view/shop'
import viewMy from '@/view/my'

Vue.use(Router)

module.exports = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: viewHome
    },
    {
      path: '/topic',
      component: viewTopic
    },
    {
      path: '/class',
      component: viewClass
    },
    {
      path: '/shop',
      component: viewShop
    },
    {
      path: '/my',
      component: viewMy
    }
  ]
})
