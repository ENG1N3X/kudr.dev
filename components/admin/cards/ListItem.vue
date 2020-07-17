<template>
  <div class="item">
    <b-row class="justify-content-center align-items-center">
      <b-col cols="12" lg="5" v-if="card.image" class="mb-20">
        <div class="itemImage">
          <img :src="`../cards/nuxt-card.png`" :alt="card.title" class="img-fluid" />
        </div>
      </b-col>
      <b-col cols="12" lg="7" class="bg-main mb-20" style="border-radius: 12px; padding: 20px;">
        <h1 class="itemTitle">{{ card.title }}</h1>
        <small class="itemSubtitle">{{ card.subtitle }}</small>
        <p class="itemDesc">{{ card.description }}</p>
        <time class="itemCreated">Добавлено {{ card.created }}</time>
        <time class="itemModified" v-if="card.modified">Изменено {{ card.modified }}</time>
        <a :href="`${card.link}`" class="btn btn-light" v-if="card.link">Ссылка</a>
      </b-col>
    </b-row>
  </div>
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
