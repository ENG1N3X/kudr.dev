<template>
  <div>
    <app-add-card />
    <app-list />
  </div>
</template>

<script>
import AppAddCard from '~/components/admin/cards/AddCard.vue'
import AppList from '~/components/admin/cards/List.vue'

export default {
  head: {
    title: 'Админ-панель'
  },
  layout: 'admin',
  components: {
    AppAddCard,
    AppList
  }
}
</script>
