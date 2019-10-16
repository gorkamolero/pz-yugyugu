<template>
  <div id="preview">
    <vcl-facebook />
    <vcl-instagram />
    <vcl-facebook />
    <vcl-instagram />
  </div>
</template>

<script>
import { VclFacebook, VclInstagram } from 'vue-content-loading'

export default {
  components: {
    VclFacebook,
    VclInstagram
  },
}
</script>

<style lang="scss" scoped>
  svg + svg { margin-top: 2rem; }
</style>