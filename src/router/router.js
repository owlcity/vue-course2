import Home from '@/views/Home.vue'

const routes = [{
  path: '/',
  alias: '/home_page',
  name: 'Home',
  component: Home
},
{
  path: '/about',
  name: 'About',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
}, {
  path: '/argu/:name',
  name: 'argu',
  component: () => import('@/views/argu.vue')

}, {
  path: '/parent',
  name: 'parent',
  component: () => import('@/views/parent.vue'),
  children: [{
    path: 'child',
    component: () => import('@/views/child.vue')
  }]
}, {
  path: '/named_view',
  components: {
    default: () => import('@/views/child.vue'),
    tel: () => import('@/views/tel.vue'),
    email: () => import('@/views/email')
  }
}, {
  // 路由重定向的三种方式
  path: '/main',
  // redirect: '/'
  // redirect: {
  //   name: 'Home'
  // }
  redirect: to => {
    // 方法接收 目标路由 作为参数
    // return 重定向的 字符串路径/路径对象
    console.log(to)
    return '/'
  }
}
]

export default routes
