import { createRouter, createWebHashHistory } from 'vue-router'

function changeList () {
  const componentURL = []
  const comItem = [
    'install',
    'color',
    'button',
    'list',
    'card',
    'tag',
    'link',
    'input',
    'menu',
    'division',
    'icon',
    'crumbs',
    'turnpage',
    'backtop',
    'message',
    'skeleton',
    'alert',
    'rate',
  ]
  comItem.forEach(item => {
    const obj = {
      path: `/component/${item}`,
      component: () => import(`../views/TyhUi/${item}.vue`)
    }
    componentURL.push(obj)
  })
  return componentURL
}

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
        children: changeList()
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
