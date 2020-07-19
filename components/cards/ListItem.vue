<template>
  <nuxt-link :to="`/card/${card._id}`" class="cardsItem">
    <div class="cardsItem__image">
      <!-- <img src="cards/nuxt-card.png" alt="card-image" /> -->
      <img :src="`${card.image}`" :alt="`${card.title}`" />
    </div>
    <div class="cardsItem__content">
      <h6>{{ card.title }}</h6>
      <span>{{ card.subtitle }}</span>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true
    }
  }
}
</script>
