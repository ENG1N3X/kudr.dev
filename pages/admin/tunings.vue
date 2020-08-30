<template>
  <div>
    <app-tunings />
  </div>
</template>

<script>
import AppTunings from '~/components/admin/tunings'

export default {
  head: {
    title: 'Админ-панель'
  },
  layout: 'admin',
  components: {
    AppTunings
  }
}
</script>
