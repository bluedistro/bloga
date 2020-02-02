import axios from 'axios'

export function login ({ commit }, user) {
  return new Promise((resolve, reject) => {
    const params = { username: user.username, password: user.password }
    let path = 'http://localhost:5000/api/login'
    axios.post(path, params).then(resp => {
      console.log('resp ', resp.data.success)
      if (resp.data.success === true) {
        commit('loginSuccess', true)
      } else {
        commit('loginSuccess', false)
      }
      resolve(resp)
    }).catch(error => {
      commit('loginSuccess', false)
      reject(error)
    })
  })
}

export function logout ({ commit }) {
  commit('loginSuccess', false)
}
