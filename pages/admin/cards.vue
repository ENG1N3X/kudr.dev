<template>
  <div>
    <app-admin-cards-add-item />
    <app-admin-cards-list />
  </div>
</template>

<script>
import AppAdminCardsAddItem from '~/components/admin/cards/AddItem.vue'
import AppAdminCardsList from '~/components/admin/cards/List.vue'

export default {
  head: {
    title: 'Админ-панель'
  },
  layout: 'admin',
  components: {
    AppAdminCardsAddItem,
    AppAdminCardsList
  }
}
</script>
