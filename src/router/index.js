import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/politics',
    name: 'Politics',
    component: () => import( '../views/Politics.vue')
  },
  {
    path: '/HowStartToPlay',
    name: 'HowStartPlay',

    component: () => import( '../views/HowStartPlay.vue')
  },

  // {
  //   path: '/keys',
  //   name: 'Keys',
  //   component: () => import( '../views/KeysPage.vue')
  // },
  // {
  //   path: '/case',
  //   name: 'Case',
  //   component: () => import( '../views/CasePage.vue')
  // },
  // {
  //   path: '/accounts',
  //   name: 'accounts',
  //   component: () => import( '../views/AccountsPage.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
