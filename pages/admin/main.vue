<template>
  <div>
    <app-main />
  </div>
</template>

<script>
import AppMain from '~/components/admin/main'

export default {
  head: {
    title: 'Админ-панель'
  },
  layout: 'admin',
  components: {
    AppMain
  },
  async fetch({ store }) {
    try {
      if (!store.getters['cards/cardsList/cardsList'].length) {
        await store.dispatch('cards/cardsList/getAllCards')
      }
      if (!store.getters['users/usersList/usersList'].length) {
        await store.dispatch('users/usersList/getAllUsers')
      }
    } catch (e) {
      console.error(e)
    }
  }
}
</script>
