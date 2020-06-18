<template>
  <div class="index-page">
    <app-header />
    <app-cards-list />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '~/components/header/header.vue'
import AppCardsList from '~/components/cards/List.vue'
import AppFooter from '~/components/footer/footer.vue'

export default {
  layout: 'default',
  components: {
    AppHeader,
    AppCardsList,
    AppFooter
  }
}
</script>

<style lang="sass" scoped>
.index-page
  min-height: 100vh
  display: flex
  flex-direction: column
</style>
