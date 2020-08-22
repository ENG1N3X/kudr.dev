<template>
  <b-container class="users">
    <b-row>
      <b-col cols="3"> <p class="usersHead">Имя</p></b-col>
      <b-col cols="3"> <p class="usersHead">Логин</p></b-col>
      <b-col cols="3"> <p class="usersHead">Регистрация</p></b-col>
      <b-col cols="3"> <p class="usersHead">Статус</p></b-col>
    </b-row>
    <app-list-user v-for="user in users" :key="user._id" :user="user" />
  </b-container>
</template>

<script>
import AppListUser from '~/components/users/ListUser.vue'

export default {
  components: {
    AppListUser
  },
  computed: {
    users() {
      return this.$store.getters['users/usersList/usersList']
    }
  }
}
</script>
