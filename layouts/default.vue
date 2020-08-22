<template>
  <div class="default-layout">
    <app-header />
    <nuxt />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '~/components/header.vue'
import AppFooter from '~/components/footer.vue'

export default {
  middleware: 'is-auth',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="sass" scoped>
.default-layout
  min-height: 100vh
  display: flex
  flex-direction: column
</style>
