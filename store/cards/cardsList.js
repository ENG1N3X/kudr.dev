export const state = () => ({
  cardsList: []
})

export const actions = {
  async getAllCards({ commit }) {
    try {
      console.log('Обновление store - cardsList')
      const cards = await this.$axios.$get('/api/v1/card/getAll')
      commit('SET_CARDS_LIST', cards)
    } catch (e) {
      console.error(e)
    }
  }
}

export const mutations = {
  SET_CARDS_LIST(state, cards) {
    state.cardsList = cards
  }
}

export const getters = {
  cardsList: (state) => state.cardsList
}
