<template lang="pug">
webview(ref="wv" :src="url" @will-navigate="onWillNavigate")
</template>

<style scoped>
webview {
  display: inline-flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

<script>
const { google } = require('googleapis')
const OAuth2 = google.auth.OAuth2

const clientSecret = require('@/../client_secret.json').installed

export default {
  data () {
    const auth = new OAuth2(clientSecret.client_id,
      clientSecret.client_secret,
      clientSecret.redirect_uris[0])
    return {
      url: auth.generateAuthUrl({scope: 'https://www.googleapis.com/auth/drive'})
    }
  },
  methods: {
    onWillNavigate (ev) {
      const url = ev.url
      if (url.match(/\/approval\//)) {
        const parser = new URL(url)
        const code = parser.searchParams.get('approvalCode')
        this.$router.push({name: 'drive', query: {code}})
      }
    }
  }
}
</script>
