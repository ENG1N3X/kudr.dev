<template>
  <b-container class="header mt-2 mb-50">
    <b-row class="align-items-center">
      <b-col cols="7">
        <nav>
          <nuxt-link to="/" class="headerLogo">Главная</nuxt-link>
        </nav>
      </b-col>
      <b-col cols="4">
        <h4 class="headerTitle">Вы вошли как, {{ user.name }}</h4>
      </b-col>
      <b-col cols="1">
        <nuxt-link to="#!" style="display: none" class="headerLink">Вход</nuxt-link>
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
