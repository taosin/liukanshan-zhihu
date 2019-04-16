import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/shop.vue')
    },
    {
      path: '/comics',
      name: 'comics',
      component: () => import('./views/comics.vue')
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('./views/shop.vue')
    },
    {
      path: '/downloads',
      name: 'downloads',
      component: () => import('./views/downloads.vue')
    }
  ]
})
