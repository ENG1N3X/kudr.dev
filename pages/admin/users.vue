<template>
  <b-row>
    <app-add-user />
    <app-list-user v-for="user in users" :key="user._id" :user="user" />
  </b-row>
</template>

<script>
import AppAddUser from '~/components/admin/users/AddUser.vue'
import AppListUser from '~/components/admin/users/ListUser.vue'

export default {
  head: {
    title: 'Админ-панель'
  },
  layout: 'admin',
  components: {
    AppAddUser,
    AppListUser
  },
  computed: {
    users() {
      return this.$store.getters['users/usersList/usersList']
    }
  }
}
</script>
