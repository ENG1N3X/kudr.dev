<template>
  <div class="row">
    <div v-for="(item, idx) in 4" :key="idx" class="col-3">
      <app-list-data-item />
    </div>
  </div>
</template>

<script>
import AppListDataItem from '~/components/ListDataItem.vue'

export default {
  components: {
    AppListDataItem
  }
}
</script>
