import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import { setTitle } from '@/libs/util'

Vue.use(VueRouter)

const router = new VueRouter({
  // 路由模式
  mode: 'hash', // hash
  routes
})

const HAS_LOGINED = true
// 路由守卫
router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title)
  // console.log(to) 将要去的路由
  // console.log(from) 从哪里来的路由
  // console.log(next)
  if (to.name !== 'login') {
    if (HAS_LOGINED) {
      next()
    } else {
      next({ name: 'login' })
    }
  } else {
    if (HAS_LOGINED) {
      next({ name: 'Home' })
    } else {
      next()
    }
  }
})

/**
* 1.导航被触发
* 2.在失活的组件(即将离开的页面组件)里调用离开守卫beforeRouteLeave
* 3.调用全局的前置守卫beforeEach
* 4.在重用的组件里调用beforeRouteUpdate
* 5.调用路由独享的守卫beforeEnter
* 6.解析异步路由组件
* 7.在被激活的组件(即将进入的页面组件)里调用befo reRouteEnter
* 8.调用全局的解析守卫beforeResolve
* 9.导航被确认
* 10.调用全局的后置守卫afterEach
* 11.触发DOM更新
* 12. 用创建好的实例调用beforeRouterEnter守卫里传给next的回调函数
*/

router.afterEach((to, from) => {
  // loading = false
})

export default router
