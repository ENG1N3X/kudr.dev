<template>
  <div class="admin-layout">
    <app-header />
    <b-container class="admin">
      <b-row>
        <b-col cols="2">
          <app-admin-nav />
        </b-col>
        <b-col cols="10">
          <nuxt />
        </b-col>
      </b-row>
    </b-container>
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '~/components/header.vue'
import AppFooter from '~/components/footer.vue'
import AppAdminNav from '~/components/admin/Nav.vue'

export default {
  // middleware: ['auth', 'is-auth'],
  components: {
    AppHeader,
    AppFooter,
    AppAdminNav
  }
}
</script>

<style lang="sass" scoped>
.admin-layout
  min-height: 100vh
  display: flex
  flex-direction: column
</style>
