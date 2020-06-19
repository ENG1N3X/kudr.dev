<template>
  <b-container class="header mt-2 mb-50">
    <b-row class="align-items-center">
      <b-col cols="7">
        <b-nav>
          <nuxt-link to="/" class="headerLogo">Главная</nuxt-link>
        </b-nav>
      </b-col>
      <b-col cols="5" class="text-right">
        <nuxt-link to="#!" class="headerLink">Вход</nuxt-link>
      </b-col>
      <b-col cols="4" style="display: none">
        <h4 class="headerTitle">
          Профиль, <nuxt-link to="!#">{{ user.name }}</nuxt-link>
        </h4>
      </b-col>
      <b-col cols="1" style="display: none">
        <nuxt-link to="#!" class="headerLink">Выход</nuxt-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: 'username'
      }
    }
  }
}
</script>
