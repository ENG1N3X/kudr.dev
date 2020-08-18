<template>
  <app-admin-cards-list />
</template>

<script>
import AppAdminCardsList from '~/components/admin/cards/List.vue'

export default {
  head: {
    title: 'Админ-панель'
  },
  layout: 'admin',
  components: {
    AppAdminCardsList
  }
}
</script>
