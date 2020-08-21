<template>
  <b-row>
    <app-admin-users-add-item />
    <app-admin-users-list-item v-for="user in users" :key="user._id" :user="user" />
  </b-row>
</template>

<script>
import AppAdminUsersAddItem from '~/components/admin/users/AddItem.vue'
import AppAdminUsersListItem from '~/components/admin/users/ListItem.vue'

export default {
  head: {
    title: 'Админ-панель'
  },
  layout: 'admin',
  components: {
    AppAdminUsersAddItem,
    AppAdminUsersListItem
  },
  computed: {
    users() {
      return this.$store.getters['users/usersList/usersList']
    }
  }
}
</script>
