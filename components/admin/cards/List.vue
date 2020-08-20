<template>
  <div>
    <h2 class="mb-4">Редактировать</h2>
    <app-admin-cards-list-item v-for="card in cards" :key="card._id" :card="card" />
  </div>
</template>

<script>
import AppAdminCardsListItem from '~/components/admin/cards/ListItem.vue'

export default {
  components: {
    AppAdminCardsListItem
  },
  computed: {
    cards() {
      return this.$store.getters['cards/cardsList/cardsList']
    }
  }
}
</script>
