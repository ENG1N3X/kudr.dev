<template>
  <nuxt-link :to="`/card/${card._id}`" class="cardsItem">
    <div class="cardsItem__image">
      <img src="cards/nuxt-card.png" alt="card-image" />
    </div>
    <div class="cardsItem__content">
      <h4 class="mainTitle">{{ card.title }}</h4>
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
