<template>
  <div>
    <app-author />
    <app-cards-list />
  </div>
</template>

<script>
import AppAuthor from '~/components/Author.vue'
import AppCardsList from '~/components/cards/List.vue'

export default {
  head: {
    title: 'Main'
  },
  layout: 'default',
  components: {
    AppAuthor,
    AppCardsList
  },
  async fetch({ store }) {
    try {
      if (!store.getters['cards/cardsList'].length) {
        await store.dispatch('cards/getAllCards')
      }
      if (!store.getters['tunings/tuningsList'].length) {
        await store.dispatch('tunings/getAllTunings')
      }
    } catch (e) {
      console.error(e)
    }
  }
}
</script>
