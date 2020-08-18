<template>
  <b-container class="cardItem">
    <b-row class="justify-content-center align-items-center">
      <b-col cols="12" lg="5" v-if="card.image" class="mb-20">
        <div class="cardItem__image">
          <img :src="`../${card.image}`" :alt="`${card.title}`" class="img-fluid" />
        </div>
      </b-col>
      <b-col cols="12" lg="7" class="bg-main mb-20" style="border-radius: 12px; padding: 20px;">
        <h1 class="cardItem__title">{{ card.title }}</h1>
        <small class="cardItem__subtitle">{{ card.subtitle }}</small>
        <p class="cardItem__desc">{{ card.description }}</p>
        <time class="cardItem__created">Добавлено {{ card.created }}</time>
        <time class="cardItem__modified" v-if="card.modified">Изменено {{ card.modified }}</time>
        <a :href="`${card.link}`" class="btn btn-light" v-if="card.link">Ссылка</a>
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
