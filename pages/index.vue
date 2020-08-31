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
    title: 'Main kudr.dev'
  },
  layout: 'default',
  components: {
    AppAuthor,
    AppCardsList
  },
  mounted() {
    this.getData()
  },
  methods: {
    async getData() {
      try {
        if (!this.$store.getters['cards/cardsList'].length) {
          await this.$store.dispatch('cards/getAllCards')
        }
        if (!this.$store.getters['tunings/tuningsList'].length) {
          await this.$store.dispatch('tunings/getAllTunings')
        }
      } catch (e) {
        console.error(e)
      }
    }
  }
  // async fetch({ store }) {
  //   try {
  //     if (!store.getters['cards/cardsList'].length) {
  //       await store.dispatch('cards/getAllCards')
  //     }
  //     if (!store.getters['tunings/tuningsList'].length) {
  //       await store.dispatch('tunings/getAllTunings')
  //     }
  //   } catch (e) {
  //     console.error(e)
  //   }
  // }
}
</script>
