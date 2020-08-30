<template>
  <b-form>
    <b-row class="align-items-center mb-4">
      <b-col cols="9">
        <h2 class="mb-0">Основные настройки</h2>
      </b-col>
      <b-col cols="3">
        <b-button block variant="success" @click.prevent="update(form)">Обновить</b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-group label="Смена заголовка" class="mb-2">
          <b-form-input v-model="form.title" placeholder="Заголовок"></b-form-input>
        </b-form-group>
        <b-form-group label="Смена текста" class="mb-2">
          <b-form-textarea v-model="form.text" placeholder="Текст" rows="3"></b-form-textarea>
        </b-form-group>
      </b-col>
    </b-row>
  </b-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        id: JSON.parse(JSON.stringify(this.$store.getters['tunings/tuningsList'][0]))._id,
        title: JSON.parse(JSON.stringify(this.$store.getters['tunings/tuningsList'][0])).title,
        text: JSON.parse(JSON.stringify(this.$store.getters['tunings/tuningsList'][0])).text
      }
    }
  },
  methods: {
    async update(form) {
      try {
        await this.$axios.$put('/api/v1/tun/update/' + form.id, form)
        await this.$store.dispatch('tunings/getAllTunings')
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>
