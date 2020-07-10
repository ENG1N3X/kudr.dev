<template>
  <b-container class="item">
    <b-row>
      <b-col cols="5" v-if="card.image">
        <div class="itemImage">
          <img :src="`../cards/nuxt-card.png`" :alt="card.title" />
        </div>
      </b-col>
      <b-col class="bg-main" style="border-radius: 12px; padding: 20px;">
        <h1 class="itemTitle">{{ card.title }}</h1>
        <small class="itemSubtitle">{{ card.subtitle }}</small>
        <p class="itemDesc">{{ card.description }}</p>
        <span class="itemCreated">Добавлено {{ card.created }}</span>
        <span class="itemModified" v-if="card.modified">Изменено {{ card.modified }}</span>
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
