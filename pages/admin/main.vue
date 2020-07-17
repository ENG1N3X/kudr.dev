<template>
  <div>
    <h2 class="color-000 text-center mb-20">Панель управления</h2>
    <p class="color-000 mb-0">
      Это приложения разработано для "складирования" полезного контента. Сам контент содержит название, описание, ссылку на полезную статью, документ и т.д.
    </p>
    <hr />
    <h4 class="color-main">Общая информация</h4>
    <big class="text-danger d-flex">Всего карточек - {{ $store.getters['cards/cardsList/cardsList'].length }}</big>
    <big class="text-danger d-flex">Всего пользователей - {{ $store.getters['users/usersList/usersList'].length }}</big>
    <hr />
  </div>
</template>

<script>
export default {
  head: {
    title: 'Админ-панель'
  },
  layout: 'admin',
  async fetch({ store }) {
    try {
      if (!store.getters['cards/cardsList/cardsList'].length) {
        await store.dispatch('cards/cardsList/getAllCards')
      }
      if (!store.getters['users/usersList/usersList'].length) {
        await store.dispatch('users/usersList/getAllUsers')
      }
    } catch (e) {
      console.error(e)
    }
  }
}
</script>
