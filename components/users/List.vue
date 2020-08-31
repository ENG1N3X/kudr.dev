<template>
  <b-container class="users">
    <b-row>
      <b-col cols="3"> <p class="usersHead">Name</p></b-col>
      <b-col cols="3"> <p class="usersHead">Login</p></b-col>
      <b-col cols="3"> <p class="usersHead">Register date</p></b-col>
      <b-col cols="3"> <p class="usersHead">Status</p></b-col>
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
      return this.$store.getters['users/usersList']
    }
  }
}
</script>
