<template>
  <b-row>
    <b-col cols="12">
      <h2 class="color-000 text-center mb-20">Панель управления</h2>
      <p class="color-000 mb-0">
        Это приложения разработано для "складирования" полезного контента. Сам контент содержит название, описание, ссылку на полезную статью, документ и т.д.
      </p>
      <hr />
    </b-col>
    <b-col cols="12">
      <h4 class="color-main">Общая информация</h4>
      <big class="text-danger d-flex">Всего карточек - {{ $store.getters['cards/cardsList'].length }}</big>
      <big class="text-danger d-flex">Всего пользователей - {{ $store.getters['users/usersList'].length }}</big>
      <hr />
    </b-col>
    <b-col cols="12">
      <h4 class="color-main">Работа с БД</h4>
      <b-button variant="success" @click="$store.dispatch('cards/getAllCards')">Обновить карточки</b-button>
    </b-col>
  </b-row>
</template>
