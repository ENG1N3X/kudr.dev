<template>
  <b-container class="header mt-2 mb-50">
    <b-row class="align-items-center">
      <b-col>
        <b-nav class="headerNav">
          <b-nav-item to="/" exact>
            Главная
          </b-nav-item>
          <b-nav-item to="/users">
            Пользователи
          </b-nav-item>
          <!-- <b-nav-item to="/admin/main" v-if="$auth.loggedIn && $store.getters['authUser'].admin">
            Панель
          </b-nav-item> -->
          <b-nav-item to="/admin/main">
            Панель
          </b-nav-item>
        </b-nav>
      </b-col>
      <b-col class="text-right" v-if="$auth.loggedIn">
        <h4 class="headerProfile">
          Профиль, <nuxt-link to="!#">{{ $auth.user.login }}</nuxt-link>
        </h4>
        <b-button class="headerLink" variant="danger" type="submit" @click="logOut()">Выход</b-button>
      </b-col>
      <b-col class="text-right" v-else>
        <b-row>
          <b-col cols="12"><nuxt-link to="/login" class="headerLink">Вход</nuxt-link></b-col>
          <b-col cols="12"><nuxt-link to="/register" class="headerLink">Регистрация</nuxt-link></b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
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
