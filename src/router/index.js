import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/layout.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/hone.vue'),
      },
      {
        path: '/component',
        redirect: '/component/install',
        component: () => import('@/views/component.vue'),
        children: [
          {
            path: '/component/install',
            component: () => import('@/views/TyhUi/install.vue')
          },
          {
            path: '/component/color',
            component: () => import('@/views/TyhUi/color.vue')
          },
          {
            path: '/component/button',
            component: () => import('@/views/TyhUi/button.vue')
          },
          {
            path: '/component/list',
            component: () => import('@/views/TyhUi/list.vue')
          },
          {
            path: '/component/card',
            component: () => import('@/views/TyhUi/card.vue')
          },
          {
            path: '/component/tag',
            component: () => import('@/views/TyhUi/tag.vue')
          },
          {
            path: '/component/link',
            component: () => import('@/views/TyhUi/link.vue')
          },
          {
            path: '/component/input',
            component: () => import('@/views/TyhUi/input.vue')
          },
          {
            path: '/component/menu',
            component: () => import('@/views/TyhUi/menu.vue')
          },
          {
            path: '/component/division',
            component: () => import('@/views/TyhUi/division.vue')
          },
          {
            path: '/component/icon',
            component: () => import('@/views/TyhUi/icon.vue')
          },
          {
            path: '/component/crumbs',
            component: () => import('@/views/TyhUi/crumbs.vue')
          },
          {
            path: '/component/turnpage',
            component: () => import('@/views/TyhUi/turnpage.vue')
          },
          {
            path: '/component/backtop',
            component: () => import('@/views/TyhUi/backtop.vue')
          },
          {
            path: '/component/message',
            component: () => import('@/views/TyhUi/message.vue')
          },
          {
            path: '/component/skeleton',
            component: () => import('@/views/TyhUi/skeleton.vue')
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router
