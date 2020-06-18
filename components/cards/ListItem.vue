<template>
  <nuxt-link to="#!" class="item">
    <img src="#!" alt="image" />
    <h4>ListDataItem-title</h4>
    <p>ListDataItem-desc</p>
  </nuxt-link>
</template>

<style lang="sass" scoped>
.item
    min-height: 200px
    display: flex
    flex-direction: column
    text-align: center
    justify-content: center
    align-items: center

    border: 1px solid #000
    border-radius: 12px

    text-decoration: none
    transition: .2s

    &:hover
        transform: scale(1.1)
</style>
