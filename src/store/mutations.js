import vue from 'vue'
const mutations = {
  SET_APP_NAME (state, params) {
    state.appName = params.appName
  },
  // 添加新的state
  SET_APP_VERSION (state) {
    vue.set(state, 'appVersion', 'V2.0')
  }

}

export default mutations
