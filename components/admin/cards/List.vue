<template>
  <div>
    <h2 class="mb-4">Редактировать</h2>
    <app-list-card v-for="card in cards" :key="card._id" :card="card" />
  </div>
</template>

<script>
import AppListCard from '~/components/admin/cards/ListCard.vue'

export default {
  components: {
    AppListCard
  },
  computed: {
    cards() {
      return this.$store.getters['cards/cardsList/cardsList']
    }
  }
}
</script>
