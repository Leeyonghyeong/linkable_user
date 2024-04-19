import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/signin',
    name: 'signin',
    component: () => import('@/pages/auth/Signin.vue'),
  },
  {
    path: '/',
    name: 'DefaultLayout',
    component: () => import('@/layout/DefaultLayout.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/pages/main/Home.vue'),
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
