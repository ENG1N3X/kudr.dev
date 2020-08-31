<template>
  <div>
    <app-users-list />
  </div>
</template>

<script>
import AppUsersList from '~/components/users/List.vue'

export default {
  head: {
    title: 'Users kudr.dev'
  },
  layout: 'default',
  middleware: 'auth',
  components: {
    AppUsersList
  },
  async fetch({ store }) {
    try {
      if (store.getters['users/usersList'].length === 0) {
        await store.dispatch('users/getAllUsers')
      }
    } catch (e) {
      console.error(e)
    }
  }
}
</script>
