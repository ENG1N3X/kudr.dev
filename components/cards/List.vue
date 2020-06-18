<template>
  <b-container>
    <b-row>
      <b-col v-for="(item, idx) in 4" :key="idx" cols="3">
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
  }
}
</script>
