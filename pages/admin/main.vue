<template>
  <div>
    <app-main />
  </div>
</template>

<script>
import AppMain from '~/components/admin/main'

export default {
  head: {
    title: 'Admin-panel'
  },
  layout: 'admin',
  components: {
    AppMain
  },
  async fetch({ store }) {
    try {
      if (!store.getters['cards/cardsList'].length) {
        await store.dispatch('cards/getAllCards')
      }
      if (!store.getters['users/usersList'].length) {
        await store.dispatch('users/getAllUsers')
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
