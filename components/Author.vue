<template>
  <b-container class="author mb-50">
    <b-row class="align-items-center mb-20">
      <b-col col cols="12" lg="6">
        <h1 class="authorName">{{ settings.title }}</h1>
      </b-col>
      <b-col col cols="12" lg="6">
        <p class="authorText text-center text-lg-left">{{ settings.text }}</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <b-button block variant="success" v-b-modal.authorModal> {{ modal.title }} </b-button>
      </b-col>
    </b-row>
    <!-- modal-author -->
    <b-modal id="authorModal" :title="modal.title" centered hide-footer>
      <ul class="authorModal__list">
        <li>
          <a href="#!">
            <font-awesome-icon :icon="['fab', 'github']" style="font-size: 40px;" />
          </a>
        </li>
        <li>
          <a href="#!">
            <font-awesome-icon :icon="['fab', 'telegram']" style="font-size: 40px;" />
          </a>
        </li>
        <li>
          <a href="#!">
            <font-awesome-icon :icon="['fas', 'envelope']" style="font-size: 40px;" />
          </a>
        </li>
      </ul>
    </b-modal>
    <!-- //modal-author -->
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      modal: {
        title: 'Связь с автором'
      },
      settings: {
        title: JSON.parse(JSON.stringify(this.$store.getters['tunings/tuningsList'][0])).title,
        text: JSON.parse(JSON.stringify(this.$store.getters['tunings/tuningsList'][0])).text
      }
    }
  }
}
</script>
