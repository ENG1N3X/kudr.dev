<template>
  <div>
    <form>
      форма
    </form>
    <app-admin-cards-list-item v-for="card in cards" :key="card._id" :card="card" />
  </div>
</template>

<script>
import AppAdminCardsListItem from '~/components/admin/cards/ListItem.vue'

export default {
  components: {
    AppAdminCardsListItem
  },
  data() {
    return {
      cards: []
    }
  },
  mounted() {
    this.cards = this.$store.getters['cards/cardsList/cardsList']
    console.log(this.cards)
  }
}
</script>
