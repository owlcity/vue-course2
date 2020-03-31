<template>
  <div>
    <!-- 1:v-modle语法糖 -->
    <!-- <a-input v-model="stateValue"> </a-input> -->
    <!-- v-model语法糖可以理解为 1 -->
    <!-- <a-input :value="stateValue" @input="handleInput"></a-input> -->
    <a-input @input="handleInput"></a-input>
    <p>{{inputValue}} -> last-letter is {{inputValueLastLetter}}</p>
    <h3>{{stateValue}}</h3>

    <h2>appName => {{appName}} appNameWithVersion-> {{appNameWithVersion}}</h2>

    <!-- <h2>state: {{appName}}</h2> -->
    <!-- <h2>username: {{userName}} firstLetters: {{firstLetters}}</h2> -->
    <button @click="changeHandleAppName">changeAppName</button>
    <h2>state: {{appName}}</h2>
    <h2>{{appVersion}}</h2>
    <button @click="setUserName">修改用户名</button>
    <button @click="regisetModule">动态注册模块</button>
    <h2>{{userName}}</h2>
    <p v-for="(li, index) in todoList" :key="index">{{ li }}</p>
  </div>
</template>
<script>
import AInput from '_c/Ainput.vue'
import { mapState, mapMutations, mapActions } from 'vuex'
// import { createNamespacedHelpers } from 'vuex'
// const { mapState } = createNamespacedHelpers('user')
// const { mapGetters } = createNamespacedHelpers('user')

// import vuex from 'vuex'
// const mapState = vuex.mapState

export default {
  name: 'store',
  components: {
    AInput
  },
  data () {
    return {
      stateValue: '',
      inputValue: ''
    }
  },
  computed: {
    // 获取state方法
    // appName () {
    //   return this.$store.state.appName
    // },
    // appVersion () {
    //   return this.$store.state.appVersion
    // },
    appNameWithVersion () {
      return this.$store.getters.appNameWithVersion
    },
    // userName () {
    //   return this.$store.state.user.userName
    // }
    // 1 mapState传入数组
    // ...mapState([
    //   'appName'
    // ])
    // 2 也可以传入一个对象
    ...mapState({
      appName: state => state.appName,
      userName: state => state.user.userName,
      appVersion: state => state.appVersion,
      todoList: state => state.user.todo ? state.user.todo.todoList : []
    }),
    // ...mapState('user', {
    //   userName: state => state.userName
    // }),
    // 3 命名空间传入state
    // ...mapState({
    //   userName: state => state.userName
    // }),
    // ...mapGetters([
    //   'appNameWithVersion'
    // ]),
    // ...mapGetters('user', [
    //   'firstLetters'
    // ]),
    inputValueLastLetter () {
      return this.inputValue.substr(-1, 1)
    }
  },
  mounted () {

  },
  methods: {
    // <!-- v-model语法糖可以理解为 2 -->
    handleInput (value) {
      // this.stateValue = value
      this.inputValue = value
    },
    ...mapMutations([
      'SET_APP_NAME',
      'SET_APP_VERSION',
      'SET_USER_NAME'
    ]),
    ...mapActions([
      'updateAppName'
    ]),
    changeHandleAppName () {
      // this.appName = 'change app name'
      // 写法1 commit
      // this.$store.commit('SET_APP_NAME', 'newAppName')
      // this.$store.commit({
      //   type: 'SET_APP_NAME',
      //   appName: 'newAppName2.0'
      // })
      // actions
      // this.updateAppName()
      // 除了使用mapActions，我们还可以使用 store实例上的一个方法触发一个actions
      this.$store.dispatch('updateAppName', '123')
      // 写法2 mapMutations
      // this.SET_APP_NAME({
      //   appName: 'set_name'
      // })
      this.SET_APP_VERSION()
      // this.$store.commit('SET_APP_VERSION')
    },
    setUserName () {
      this.SET_USER_NAME('家乐')
    },
    regisetModule () {
      this.$store.registerModule(['user', 'todo'], {
        state: {
          todoList: [
            '学习mutations',
            '学习Actions'
          ]
        }
      })
    }

  }
}
</script>
