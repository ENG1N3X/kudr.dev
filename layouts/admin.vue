<template>
  <div class="admin-layout">
    <app-header />
    <b-container style="padding-bottom: 30px;">
      <b-row>
        <b-col cols="12" lg="2">
          <app-admin-nav />
        </b-col>
        <b-col cols="12" lg="10">
          <nuxt />
        </b-col>
      </b-row>
    </b-container>
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '~/components/Header.vue'
import AppFooter from '~/components/Footer.vue'
import AppAdminNav from '~/components/admin/Nav.vue'

export default {
  middleware: ['auth', 'is-auth'],
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
