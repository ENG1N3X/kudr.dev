<template>
  <b-container>
    <b-row class="justify-content-center align-items-center cardPage">
      <b-col cols="12" lg="6" xl="5" v-if="card.image" class="mb-20">
        <a :href="`../${card.image}`" :data-lightbox="card.title" class="cardPage__image">
          <img :src="`../${card.image}`" :alt="card.title" class="img-fluid" />
        </a>
      </b-col>
      <b-col cols="12" lg="6" xl="7" class="mb-20">
        <div class="bg-main" style="border-radius: 8px 0 8px 0; padding: 20px 15px;">
          <h1 class="cardPage__title">{{ card.title }}</h1>
          <small class="cardPage__subtitle">{{ card.subtitle }}</small>
          <p class="cardPage__desc">{{ card.description }}</p>
          <time class="cardPage__created">Created {{ card.created }}</time>
          <time class="cardPage__modified" v-if="card.modified">Modified {{ card.modified }}</time>
          <b-button :href="card.link" target="_blank" :disabled="!card.link">Project link</b-button>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
if (process.client) {
  require('lightbox2')
}

export default {
  head: {
    title: 'Card'
  },
  async asyncData({ params, $axios }) {
    try {
      const card = await $axios.get(`/api/v1/card/getById/${params.id}`)
      return { card: card.data }
    } catch (e) {
      console.error('Card not found', e)
    }
  }
}
</script>
