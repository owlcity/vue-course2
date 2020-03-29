<template>
  <div>
    <!-- 1:v-modle语法糖 -->
    <!-- <a-input v-model="stateValue"> </a-input> -->
    <!-- v-model语法糖可以理解为 1 -->
    <!-- <a-input :value="stateValue" @input="handleInput"></a-input> -->
    <a-input @input="handleInput"></a-input>
    <p>{{inputValue}} -> last-letter is {{inputValueLastLetter}}</p>
    <h3>{{stateValue}}</h3>

    <!-- <h2>appName => {{appName}} appNameWithVersion-> {{appNameWithVersion}}</h2> -->

    <!-- <h2>state: {{appName}}</h2> -->
    <h2>username: {{userName}} firstLetters: {{firstLetters}}</h2>
  </div>
</template>
<script>
import AInput from '_c/Ainput.vue'
import { mapState, mapGetters } from 'vuex'
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
    appName () {
      return this.$store.state.appName
    },
    // appNameWithVersion () {
    //   return this.$store.getters.appNameWithVersion
    // },
    // userName () {
    //   return this.$store.state.user.userName
    // }
    // 1 mapState传入数组
    // ...mapState([
    //   'appName'
    // ])
    // 2 也可以传入一个对象
    // ...mapState({
    //   appName: state => state.appName,
    //   userName: state => state.user.userName
    // })
    ...mapState('user', {
      userName: state => state.userName
    }),
    // 3 命名空间传入state
    // ...mapState({
    //   userName: state => state.userName
    // }),
    // ...mapGetters([
    //   'appNameWithVersion'
    // ]),
    ...mapGetters('user', [
      'firstLetters'
    ]),
    inputValueLastLetter () {
      return this.inputValue.substr(-1, 1)
    }
  },
  methods: {
    // <!-- v-model语法糖可以理解为 2 -->
    handleInput (value) {
      // this.stateValue = value
      this.inputValue = value
    }
  }
}
</script>
