import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/signin',
    name: 'Signin',
    component: () => import('@/pages/auth/Signin.vue'),
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('@/pages/auth/Signup.vue'),
  },
  {
    path: '/',
    name: 'MainLayout',
    component: () => import('@/layout/MainLayout.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/pages/main/Home.vue'),
      },
    ],
  },
  {
    path: '/',
    name: 'TopScrollLayout',
    component: () => import('@/layout/TopScrollLayout.vue'),
    children: [
      {
        path: '/tournament',
        name: 'Tournament',
        component: () => import('@/pages/main/Tournament.vue'),
      },
      {
        path: '/favorite',
        name: 'Favorite',
        component: () => import('@/pages/main/Favorite.vue'),
      },
    ],
  },
  {
    path: '/',
    name: 'DefaultLayout',
    component: () => import('@/layout/DefaultLayout.vue'),
    children: [
      {
        path: '/qrcode',
        name: 'QRCode',
        component: () => import('@/pages/main/QRCode.vue'),
      },
      {
        path: '/more',
        name: 'More',
        component: () => import('@/pages/main/More.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { left: 0, top: 0 }
  },
  routes,
})

export default router
