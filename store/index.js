export const state = () => ({
  error: ''
})

export const mutations = {
  SET_USER_AUTH(state, user) {
    this.$auth.setUser(user)
    this.$auth.$storage.setLocalStorage('token', this.$auth.user.id, false)
  },
  SET_ERROR(state, error) {
    state.error = error
  },
  CLEAR_ERROR(state) {
    state.error = ''
  }
}

export const actions = {
  async login({ commit }, data) {
    try {
      const response = await this.$auth.loginWith('local', { data: data })
      commit('SET_USER_AUTH', response.data)
    } catch (e) {
      commit('SET_ERROR', e.response.data.message, { root: true })
      throw e
    }
  },
  async autoLogin({ commit }, token) {
    try {
      const response = await this.$axios.get(`/api/v1/user/getById/${token}`)
      commit('SET_USER_AUTH', response.data)
    } catch (e) {
      commit('SET_ERROR', e.response.data.message, { root: true })
      throw e
    }
  }
}

export const getters = {
  error: (state) => state.error
}
