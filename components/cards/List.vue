<template>
  <b-container>
    <b-row v-if="cards.length != 0" class="justify-content-center">
      <b-col v-for="card in cards" :key="card._id" cols="7" sm="6" md="4" lg="3" class="mb-30">
        <app-list-card :card="card" />
      </b-col>
    </b-row>
    <b-row v-else>
      <b-col>
        <span class="d-block color-fff text-center" style="font-size: 1.8rem;">No card loaded.</span>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import AppListCard from '~/components/cards/ListCard.vue'

export default {
  components: {
    AppListCard
  },
  data() {
    return {
      cards: []
    }
  },
  mounted() {
    this.cards = this.$store.getters['cards/cardsList']
  }
}
</script>
