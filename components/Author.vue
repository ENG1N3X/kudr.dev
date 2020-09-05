<template>
  <div style="padding: 0 15px;">
    <b-container class="author mb-30" style="border-radius: 8px 0 8px 0">
      <b-row class="align-items-center">
        <b-col col cols="12" lg="6">
          <h1 class="authorName">{{ settings.title }}</h1>
        </b-col>
        <b-col col cols="12" lg="6">
          <p class="authorText text-center text-lg-left">{{ settings.text }}</p>
        </b-col>
      </b-row>
      <!-- modal-author -->
      <b-modal id="authorModal" :title="modal.title" centered hide-footer>
        <ul class="authorModal__list">
          <li>
            <a href="https://github.com/ENG1N3X" target="_blank">
              <font-awesome-icon :icon="['fab', 'github']" style="font-size: 40px;" />
            </a>
          </li>
          <li>
            <a href="https://t-do.ru/eng1n3x" target="_blank">
              <font-awesome-icon :icon="['fab', 'telegram']" style="font-size: 40px;" />
            </a>
          </li>
          <li>
            <a href="mailto:eng1n3x.developer@gmail.com" target="_blank">
              <font-awesome-icon :icon="['fas', 'envelope']" style="font-size: 40px;" />
            </a>
          </li>
        </ul>
      </b-modal>
      <!-- //modal-author -->
    </b-container>
    <b-container class="author mb-60" style="border-radius: 0 8px 0 8px">
      <b-row class="justify-content-center">
        <b-col cols="10" md="6" lg="4">
          <b-button block class="bg-orange" v-b-modal.authorModal style="border-radius: 8px 0 8px 0;"> {{ modal.title }} </b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modal: {
        title: 'Feedback'
      },
      settings: {
        title: JSON.parse(JSON.stringify(this.$store.getters['tunings/tuningsList'][0])).title,
        text: JSON.parse(JSON.stringify(this.$store.getters['tunings/tuningsList'][0])).text
      }
    }
  }
}
</script>
