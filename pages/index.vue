<template>
  <div class="container">
    <app-list-data />
  </div>
</template>

<script>
import AppListData from '~/components/ListData.vue'

export default {
  layout: 'default',
  components: {
    AppListData
  }
}
</script>
