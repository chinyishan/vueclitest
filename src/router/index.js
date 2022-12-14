import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopView from '../views/ShopView.vue'
// import ReportView from '../views/ReportView.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    // path: '/shop',
    // name: 'shop',
    path: '/shop/:productID(\\d+)',
    name: 'shop',
    chName: '商品',
    component: ShopView
  },
  // {
  //   path: '/report',
  //   name: 'report',
  //   component: ReportView
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
