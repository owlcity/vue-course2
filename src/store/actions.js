import { getAppName } from '@/api/app'

const action = {
  updateAppName ({ commit }) {
    getAppName().then(res => {
      // console.log(res)
      commit('SET_APP_NAME', res.info)
    }).catch(err => {
      console.log(err)
    })
  }
}

export default action
