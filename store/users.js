export const state = () => ({
  usersList: []
})

export const actions = {
  async createUser({ commit, dispatch }, data) {
    try {
      await this.$axios.$post('/api/v1/user/create/', data)
      await dispatch('getAllUsers')
    } catch (e) {
      commit('SET_ERROR', e.response.data.message, { root: true })
      throw e
    }
  },
  async getAllUsers({ commit }) {
    try {
      console.log('Update store - usersList')
      const users = await this.$axios.$get('/api/v1/user/getAll')
      commit('SET_USERS_LIST', users)
    } catch (e) {
      console.error(e)
    }
  }
}

export const mutations = {
  SET_USERS_LIST(state, users) {
    state.usersList = users
  }
}

export const getters = {
  usersList: (state) => state.usersList
}
