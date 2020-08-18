<template>
  <div>
    <app-cards-list />
  </div>
</template>

<script>
import AppCardsList from '~/components/cards/List.vue'

export default {
  head: {
    title: 'Главная'
  },
  layout: 'default',
  components: {
    AppCardsList
  },
  async fetch({ store }) {
    try {
      if (store.getters['cards/cardsList/cardsList'].length === 0) {
        await store.dispatch('cards/cardsList/getAllCards')
      }
    } catch (e) {
      console.error(e)
    }
  }
}
</script>
