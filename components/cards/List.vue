<template>
  <b-container>
    <b-row>
      <b-col v-for="(card, idx) in cards" :key="idx" cols="2">
        <app-cards-list-item />
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
