<template>
  <nuxt-link :to="`/card/${card._id}`" class="cardItem">
    <div class="cardItem__image">
      <!-- <img src="cards/nuxt-card.png" alt="card-image" /> -->
      <img :src="`${card.image}`" :alt="`${card.title}`" />
    </div>
    <div class="cardItem__content">
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
