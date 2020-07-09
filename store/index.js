export const state = () => ({
  authUser: null,
  error: null
})

export const mutations = {
  SET_USER(state, user) {
    state.authUser = user
  },
  SET_ERROR(state, error) {
    state.error = error
  },
  CLEAR_ERROR(state) {
    state.error = null
  }
}

export const actions = {
  async login({ commit }, data) {
    try {
      const { response } = await this.$auth.loginWith('local', { data: data })
      console.log(response)

      console.log('this.$auth.user3', this.$auth.user)
      console.log('this.$store.state.auth.user3', this.$store.state.auth.user)
      console.log('this.$auth.loggedIn3', this.$auth.loggedIn)
      console.log('this.$store.state.auth.loggedIn3', this.$store.state.auth.loggedIn)

      // commit('SET_USER', data)
    } catch (e) {
      // if (error.response && error.response.status === 401) {
      //   throw new Error('Bad credentials')
      // }
      throw e
    }
  },

  async logout({ commit }) {
    await axios.post('/api/logout')
    commit('SET_USER', null)
  }
}

export const getters = {
  error: (state) => state.error,
  authUser: (state) => state.authUser
}
