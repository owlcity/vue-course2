<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/img/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <div>
      <button @click="handleClick('back')">返回上一页</button>
    </div>
    <div>
      <button @click="handleClick('push')">跳转 parent</button>
    </div>
    <div>
      <button @click="handleClick('replace')">replace parent</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    handleClick (type) {
      // this.$router.go(-1)
      if (type === 'back') {
        this.$router.back()
      } else if (type === 'push') {
        // this.$router.push('/parent')
        this.$router.push({
          // 1
          path: '/argu/zk'
          // name: 'argu',
          // params: {
          //   name: 'zk'
          // }
          // query: {
          //   name: 'zk'
          // }
        })
      } else {
        this.$router.replace({
          name: 'parent'
        })
      }
    }
  }
}
</script>
