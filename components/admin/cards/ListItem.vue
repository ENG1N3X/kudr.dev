<template>
  <b-form class="adminCard" :class="form.isActive ? 'active' : ''">
    <b-row class="adminCard__top" @click="form.isActive = !form.isActive">
      <b-col cols="4">
        <h4 class="mb-0">{{ card.title }}</h4>
      </b-col>
      <b-col cols="3">
        <p class="mb-0">Создано: {{ card.created }}</p>
      </b-col>
      <b-col cols="3">
        <p class="mb-0">Изменено: {{ card.modified ? card.modified : 'нет' }}</p>
      </b-col>
    </b-row>
    <b-row class="adminCard__content">
      <b-col cols="4" class="m-auto">
        <div class="adminCard__img">
          <img :src="`../${card.image}`" :alt="`${card.title}`" />
        </div>
      </b-col>
      <b-col cols="8">
        <b-row class="align-items-center">
          <b-col>
            <b-form-group label="Введите новое название" :description="`Текущее значение - ${card.title}`" class="mb-0">
              <b-form-input v-model="form.title" class="adminCard__input" placeholder="Название"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group label="Введите новое краткое описание" :description="`Текущее значение - ${card.subtitle}`" class="mb-0">
              <b-form-input v-model="form.subtitle" class="adminCard__input" placeholder="Краткое описание"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-form-group label="Введите новое описание" :description="`Текущее значение - ${card.description}`" class="mb-0">
          <b-form-textarea v-model="form.description" class="adminCard__input textarea" placeholder="Описание"></b-form-textarea>
        </b-form-group>
        <b-row class="mt-2 align-items-center justify-content-end">
          <b-col cols="7">
            <b-form-file
              v-model="form.imageFile"
              :state="Boolean(form.imageFile)"
              :placeholder="form.imageFile ? form.imageFile.name : 'Choose a file or drop it here...'"
              drop-placeholder="Drop file here..."
            ></b-form-file>
          </b-col>
          <b-col cols="5 text-right">
            <b-button variant="warning" type="submit" style="color: #fff !important" @click.prevent="edit(card._id, form)">Изменить</b-button>
            <b-button variant="danger" type="submit" class="color-fff" @click.prevent="remove(card._id)">Удалить</b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-form>
</template>
<script>
export default {
  data() {
    return {
      form: {
        title: new Date().toLocaleString(),
        subtitle: new Date().toDateString(),
        description: new Date().toTimeString(),
        image: '',
        imageFile: null,
        link: '',
        modified: '',
        isActive: true
      }
    }
  },
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  methods: {
    async edit(id, form) {
      form.modified = new Date().toLocaleString()
      try {
        await this.$axios.$put('/api/v1/card/update/' + id, form)
        await this.$store.dispatch('cards/cardsList/getAllCards')
      } catch (e) {
        console.error(e)
      }
      // this.formReset()
    },
    remove(id) {
      console.log(id)
    },
    formReset() {
      this.form.title = ''
      this.form.subtitle = ''
      this.form.description = ''
      this.form.image = ''
      this.form.imageFile = ''
      this.form.link = ''
      this.form.modfifed = ''
      // this.form.isActive = ""
    }
  }
}
</script>
