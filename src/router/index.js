import Vue from 'vue'
import Router from 'vue-router'
/* Layout */
import Layout from '@/layout'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    hidden: false,
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'home',
        component: () => import('../views/home/index.vue'),
        meta: { title: 'home', icon: 'form' }
      }
    ]
  },
  {
    path: '/about',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'about',
        component: () => import('../views/about/index.vue'),
        meta: { title: 'about', icon: 'form' }
      }
    ]
  },
  {
    path: '/theme',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'theme',
        component: () => import('../views/theme/index.vue'),
        meta: { title: 'theme', icon: 'form' }
      }
    ]
  },
  {
    path: '/mutest',
    hidden: false,
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'mutest',
        component: () => import('../views/mutest/index.vue'),
        meta: { title: 'mutest', icon: 'form' }
      }
    ]
  },
  {
    path: '/i18n',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'i18n',
        component: () => import('../views/i18n/index.vue'),
        meta: { title: 'i18n', icon: 'form' }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
