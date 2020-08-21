<template>
  <b-form class="adminCard bg-main" :class="form.isActive ? 'active' : ''">
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
        <b-row v-if="form.image">
          <b-col cols="12" class="mb-1 text-center">
            <h6 class="color-fff mb-1">Старая картинка</h6>
            <div class="d-inline-block">
              <a :href="`../${card.image}`" data-lightbox="Старая картинка">
                <img style="max-width: 40%; height: auto;" :src="`../${card.image}`" :alt="`${card.title}`" />
              </a>
            </div>
          </b-col>
          <b-col cols="12" class="text-center">
            <h6 class="color-fff mb-1">Новая картинка</h6>
            <div class="d-inline-block">
              <a :href="uploadImageURL" data-lightbox="Новая картинка">
                <img style="max-width: 40%; height: auto;" v-if="form.image" :src="uploadImageURL" :alt="`${form.image.name}`" />
              </a>
            </div>
          </b-col>
        </b-row>
        <div class="adminCard__img" v-else>
          <a :href="`../${card.image}`" data-lightbox="Картинка сейчас">
            <img :src="`../${card.image}`" :alt="`${card.title}`" />
          </a>
        </div>
      </b-col>
      <b-col cols="8">
        <b-row class="align-items-center mb-2">
          <b-col>
            <b-form-group label="Введите новое название" class="mb-0">
              <b-form-input v-model="form.title" class="adminCard__input" placeholder="Название"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group label="Введите новое краткое описание" class="mb-0">
              <b-form-input v-model="form.subtitle" class="adminCard__input" placeholder="Краткое описание"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-form-group label="Введите новое описание" class="mb-2">
          <b-form-textarea v-model="form.description" class="adminCard__input textarea" placeholder="Описание"></b-form-textarea>
        </b-form-group>
        <b-row class="justify-content-between align-items-end mb-2">
          <b-col cols="9">
            <b-form-group label="Вставьте новую полную ссылку" class="mb-0">
              <b-form-input v-model="form.link" class="adminCard__input" placeholder="Ссылка"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="3" class="text-right">
            <b-button :href="form.link" target="_blank" :disabled="!form.link">Ссылка</b-button>
          </b-col>
        </b-row>
        <b-row class="align-items-center justify-content-end">
          <b-col cols="7">
            <b-form-file
              v-model="form.image"
              :state="Boolean(form.image)"
              :placeholder="form.image ? form.image.name : 'Choose a file or drop it here...'"
              drop-placeholder="Drop file here..."
            ></b-form-file>
          </b-col>
          <b-col cols="5" class="text-right">
            <b-button variant="warning" type="submit" style="color: #fff !important" @click.prevent="edit(card._id, form)">Изменить</b-button>
            <b-button variant="danger" type="submit" class="color-fff" @click.prevent="remove(card._id)">Удалить</b-button>
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
        title: this.card.title,
        subtitle: this.card.subtitle,
        description: this.card.description,
        image: null,
        link: this.card.link,
        isActive: false
      }
    }
  },
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  computed: {
    uploadImageURL() {
      return URL.createObjectURL(this.form.image)
    }
  },
  methods: {
    async edit(id, form) {
      const fd = new FormData()
      fd.append('title', form.title)
      fd.append('subtitle', form.subtitle)
      fd.append('description', form.description)
      if (form.image) {
        this.$axios.setHeader('Content-Type', 'multipart/form-data')
        fd.append('image', form.image, form.image.name)
      }
      fd.append('link', form.link)
      fd.append('modified', new Date().toLocaleString())
      try {
        await this.$axios.$put('/api/v1/card/update/' + id, fd)
        await this.$store.dispatch('cards/cardsList/getAllCards')
      } catch (e) {
        console.error(e)
      }
      this.formReset()
    },
    async remove(id) {
      try {
        await this.$axios.$delete('/api/v1/card/remove/' + id)
        await this.$store.dispatch('cards/cardsList/getAllCards')
      } catch (e) {
        console.error(e)
      }
    },
    formReset() {
      this.form.image = null
    }
  }
}
</script>
