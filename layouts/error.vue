<template>
  <b-container>
    <b-row>
      <b-col cols="12">
        <h1 class="mainTitle mb-4 text-center">Something went wrong!</h1>
        <p class="color-000 mb-0 text-center">Come back on <nuxt-link to="/">Main</nuxt-link></p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  middleware: 'is-auth',
  auth: false
}
</script>
