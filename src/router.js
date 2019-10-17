import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Builder from './views/Builder.vue'
import Content from './components/Content.vue'
import Style from './components/Style.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/builder',
      name: 'builder',
      component: Builder,
      children: [
        {
          path: 'content',
          component: Content
        },
        {
          path: 'style',
          component: Style
        },
      ]
    }
  ]
})