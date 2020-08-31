<template>
  <b-row>
    <b-col>
      <p class="usersInfo">{{ user.name }}</p>
    </b-col>
    <b-col>
      <p class="usersInfo">{{ user.login }}</p>
    </b-col>
    <b-col>
      <p class="usersInfo">{{ user.created }}</p>
    </b-col>
    <b-col>
      <p class="usersInfo admin" v-if="user.admin == 1">Admin</p>
      <p class="usersInfo owner" v-else-if="user.admin == 2">Founder</p>
      <p class="usersInfo default" v-else>User</p>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>
