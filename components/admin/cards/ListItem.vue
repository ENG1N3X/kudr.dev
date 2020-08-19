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
        <div class="adminCard__img" v-if="card.image">
          <img v-if="form.image" :src="uploadImageURL" :alt="`${form.image.name}`" />
          <img v-else :src="`../${card.image}`" :alt="`${card.title}`" />
        </div>
        <p v-else class="color-fff text-center">Картинка куда-то укатилась...</p>
      </b-col>
      <b-col cols="8">
        <b-row class="align-items-center">
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
        <b-form-group label="Введите новое описание" class="mb-0">
          <b-form-textarea v-model="form.description" class="adminCard__input textarea" placeholder="Описание"></b-form-textarea>
        </b-form-group>
        <b-row class="mt-2 align-items-center justify-content-end">
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
    remove(id) {
      console.log(id)
    },
    formReset() {
      this.form.image = null
    }
  }
}
</script>
