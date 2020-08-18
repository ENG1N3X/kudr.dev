export const state = () => ({
  authUser: '',
  error: ''
})

export const mutations = {
  SET_USER(state, user) {
    state.authUser = user
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
      commit('SET_USER', response.data)
    } catch (e) {
      commit('SET_ERROR', e.response.data.message, { root: true })
      throw e
    }
  },

  async logout({ commit }) {
    await this.$auth.logout()
    commit('SET_USER', '')
  }
}

export const getters = {
  error: (state) => state.error,
  authUser: (state) => state.authUser
}
