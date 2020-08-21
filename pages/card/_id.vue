<template>
  <b-container>
    <b-row class="justify-content-center align-items-center cardPage">
      <b-col cols="12" lg="5" v-if="card.image" class="mb-20">
        <div class="cardPage__image">
          <img :src="`../${card.image}`" :alt="`${card.title}`" class="img-fluid" />
        </div>
      </b-col>
      <b-col cols="12" lg="7" class="bg-main mb-20" style="border-radius: 12px; padding: 20px;">
        <h1 class="cardPage__title">{{ card.title }}</h1>
        <small class="cardPage__subtitle">{{ card.subtitle }}</small>
        <p class="cardPage__desc">{{ card.description }}</p>
        <time class="cardPage__created">Добавлено {{ card.created }}</time>
        <time class="cardPage__modified" v-if="card.modified">Изменено {{ card.modified }}</time>
        <b-button :href="card.link" target="_blank" :disabled="!card.link">Ссылка</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  head: {
    title: `Карточка`
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
