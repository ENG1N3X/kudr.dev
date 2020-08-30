export const state = () => ({
  tuningsList: []
})

export const actions = {
  async getAllTunings({ commit }) {
    try {
      console.log('Update store - tuningsList')
      const tuningsList = await this.$axios.$get('/api/v1/tun/getAll')
      commit('SET_TUNINGS_LIST', tuningsList)
    } catch (e) {
      console.error(e)
    }
  }
}

export const mutations = {
  SET_TUNINGS_LIST(state, tuningsList) {
    state.tuningsList = tuningsList
  }
}

export const getters = {
  tuningsList: (state) => state.tuningsList
}
