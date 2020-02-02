
const routes = [
  { path: '/', name: 'login', component: () => import('pages/Login.vue') },
  {
    path: '/home',
    component: () => import('layouts/MyLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      { path: '', name: 'home', component: () => import('pages/Index.vue') },
      { path: 'blank', component: () => import('pages/Blank.vue') },
      { path: 'countdown', component: () => import('pages/CounterDemo.vue') },
      { path: 'register', name: 'registerMember', component: () => import('pages/Register.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
