<template>
  <b-container class="footer">
    <b-row>
      <b-col>
        <span class="footerCopyright">
          Copyright by
          <a :href="`${copyrightLink}`">{{ copyright }}</a>
        </span>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      copyright: 'eng1n3x',
      copyrightLink: 'https://github.com/ENG1N3X?tab=repositories'
    }
  }
}
</script>
