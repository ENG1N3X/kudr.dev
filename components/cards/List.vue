<template>
  <b-container class="cards">
    <b-row v-if="cards" class="justify-content-center">
      <b-col v-for="card in cards" :key="card._id" cols="7" sm="6" md="4" lg="3" xl="2" class="mb-30">
        <app-cards-list-item :card="card" />
      </b-col>
    </b-row>
    <b-row v-else>
      <b-col>
        <span class="cardsEmpty">Ни одна карточка не загружена.</span>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import AppCardsListItem from '~/components/cards/ListItem.vue'

export default {
  components: {
    AppCardsListItem
  },
  data() {
    return {
      cards: []
    }
  },
  mounted() {
    this.cards = this.$store.getters['cards/cardsList/cardsList']
  }
}
</script>
