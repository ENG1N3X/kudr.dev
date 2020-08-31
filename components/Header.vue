<template>
  <div class="header mb-60">
    <b-container>
      <b-row class="align-items-center" style="min-height: 55px;">
        <b-col>
          <b-nav class="headerNav">
            <b-nav-item to="/" exact>
              Main
            </b-nav-item>
            <b-nav-item to="/users">
              Users
            </b-nav-item>
            <b-nav-item to="/admin/main" v-if="$auth.loggedIn && $auth.user.admin">
              Panel
            </b-nav-item>
          </b-nav>
        </b-col>
        <b-col class="text-right d-flex flex-column d-md-block" v-if="$auth.loggedIn">
          <h4 class="headerProfile">
            Профиль, <nuxt-link to="!#">{{ $auth.user.login }}</nuxt-link>
          </h4>
          <button class="btn headerLink" style="max-width: 28px; padding: 0; margin-left: auto;" type="submit" @click="logOut()">
            <font-awesome-icon :icon="['fas', 'sign-out-alt']" />
          </button>
        </b-col>
        <b-col class="text-right" v-else>
          <b-row>
            <b-col cols="12"><nuxt-link to="/login" class="headerLink">Login</nuxt-link></b-col>
            <b-col cols="12"><nuxt-link to="/register" class="headerLink">Register</nuxt-link></b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  methods: {
    async logOut() {
      await this.$auth.logout()
      this.$auth.$storage.setLocalStorage('token', null, false)
    }
  }
}
</script>
