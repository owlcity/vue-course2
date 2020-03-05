import Home from '@/views/Home.vue'

const routes = [{
  path: '/',
  alias: '/home_page',
  name: 'Home',
  component: Home,
  // 3 路由函数传参
  props: router => {
    // console.log(router)
    return {
      food: router.query.food
    }
  }
  // 路由独享的守卫
  // beforeEnter: (to, from, next) => {
  //   if (from.name === 'About') alert('从about来')
  //   else alert('不是about来')
  //   next()
  // }
}, {
  path: '/login',
  name: 'login',
  component: () => import('@/views/login.vue')
},
{
  path: '/about',
  name: 'About',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // 2 路由对象传参
  props: {
    food: 'banana'
  },
  meta: {
    title: '关于'
  }
}, {
  path: '/argu/:name',
  name: 'argu',
  component: () => import('@/views/argu.vue'),
  props: true // 1 路由布尔传参

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
    email: () => import('@/views/email.vue')
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
}, {
  path: '*',
  component: () => import('@/views/error_404.vue')
}
]

export default routes
