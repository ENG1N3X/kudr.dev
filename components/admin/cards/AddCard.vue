<template>
  <b-form class="adminCard">
    <b-row class="justify-content-between mb-4">
      <b-col cols="3">
        <h2 class="mb-0">Добавить</h2>
      </b-col>
      <b-col cols="3" class="text-right">
        <b-button variant="success" type="submit" class="color-fff" @click.prevent="create(form)">Добавить</b-button>
      </b-col>
    </b-row>
    <b-row class="adminCard__add">
      <b-col cols="4" class="m-auto">
        <div class="adminCard__img" v-if="form.image">
          <a class="d-inline-block" :href="uploadImageURL" data-lightbox="Картинка сейчас">
            <img :src="uploadImageURL" alt="Загруженная картинка" />
          </a>
        </div>
        <p class="color-000 mb-0 text-center" v-else>Картинка еще не загружена</p>
      </b-col>
      <b-col cols="8">
        <b-row class="align-items-center mb-2">
          <b-col>
            <b-form-group label="Введите название" class="mb-0">
              <b-form-input v-model="form.title" class="adminCard__input" placeholder="Название"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group label="Введите краткое описание" class="mb-0">
              <b-form-input v-model="form.subtitle" class="adminCard__input" placeholder="Краткое описание"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-form-group label="Введите описание" class="mb-2">
          <b-form-textarea v-model="form.description" class="adminCard__input textarea" placeholder="Описание"></b-form-textarea>
        </b-form-group>
        <b-row class="justify-content-between align-items-end mb-2">
          <b-col cols="9">
            <b-form-group label="Вставьте полную ссылку" class="mb-0">
              <b-form-input v-model="form.link" class="adminCard__input" placeholder="Ссылка"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="3" class="text-right">
            <b-button :href="form.link" target="_blank" :disabled="!form.link">Ссылка</b-button>
          </b-col>
        </b-row>
        <b-row class="align-items-center justify-content-end">
          <b-col cols="12">
            <b-form-group label="Выберите картинку" class="mb-0">
              <b-form-file
                v-model="form.image"
                :state="Boolean(form.image)"
                :placeholder="form.image ? form.image.name : 'Choose a file or drop it here...'"
                drop-placeholder="Drop file here..."
              ></b-form-file>
            </b-form-group>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-form>
</template>

<script>
if (process.client) {
  require('lightbox2')
}

export default {
  data() {
    return {
      form: {
        title: 'title',
        subtitle: 'subtitle',
        description: 'description',
        image: null,
        link: 'localhost:3000'
      }
    }
  },
  computed: {
    uploadImageURL() {
      return URL.createObjectURL(this.form.image)
    }
  },
  methods: {
    async create(form) {
      const fd = new FormData()
      fd.append('title', form.title)
      fd.append('subtitle', form.subtitle)
      fd.append('description', form.description)
      if (form.image) {
        this.$axios.setHeader('Content-Type', 'multipart/form-data')
        fd.append('image', form.image, form.image.name)
      }
      fd.append('link', form.link)
      fd.append('created', new Date().toLocaleString())
      try {
        await this.$axios.$post('/api/v1/card/create', fd)
        await this.$store.dispatch('cards/getAllCards')
      } catch (e) {
        console.error(e)
      }
      this.formReset()
    },
    formReset() {
      this.form.title = ''
      this.form.subtitle = ''
      this.form.description = ''
      this.form.link = ''
      this.form.image = null
    }
  }
}
</script>
