<template>
  <b-container>
    <b-row>
      <b-col>
        <p class="color-000">{{ card._id }}</p>
        <p class="color-000">{{ card.title }}</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
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
