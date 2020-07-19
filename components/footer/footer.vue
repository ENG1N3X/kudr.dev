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
    <div style="position: fixed;top: 300px;right: 0;background: #26c44e;color: #fff;padding: 10px 20px;border-radius: 5px 0 0 5px;font-size: 1rem; display: flex; flex-direction: column;">
      <span style="color: red; padding: 0;">Info</span>
      <span v-if="$auth.loggedIn">L: {{ $auth.loggedIn }}</span>
      <span v-if="$auth.loggedIn">U: {{ $store.state.authUser.login }}</span>
      <span class="d-inline d-sm-none color-main" style="font-size: 1.5rem;">PS: xs</span>
      <span class="d-none d-sm-inline d-md-none color-main" style="font-size: 1.5rem;">PS: sm</span>
      <span class="d-none d-md-inline d-lg-none color-main" style="font-size: 1.5rem;">PS: md</span>
      <span class="d-none d-lg-inline d-xl-none color-main" style="font-size: 1.5rem;">PS: lg</span>
      <span class="d-none d-xl-inline color-main" style="font-size: 1.5rem;">PS: xl</span>
    </div>
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
