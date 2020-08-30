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
    title: 'Главная'
  },
  layout: 'default',
  components: {
    AppAuthor,
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
