const state = {
  //
  userName: 'zk'
}

const getters = {
  firstLetters: (state) => {
    return state.userName.substr(0, 1)
  }
}

const mutations = {
  SET_USER_NAME (state, params) {
    state.userName = params
  }
}

const actions = {
  updateUserName ({ commit, state, rootState, dispatch }) {
    dispatch('xxx', '')
  },
  xxx () {

  }
}

export default {
  // namespaced: true,
  state,
  getters,
  mutations,
  actions
}
