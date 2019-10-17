<template>
  <section id="preview"
    :class="view"
  >
    <PreviewNav @change-view="setView" />
    <div class="inner-preview">
      <vcl-facebook />
      <vcl-instagram />
      <vcl-facebook />
      <vcl-instagram />
    </div>
  </section>
</template>

<script>
import { VclFacebook, VclInstagram } from 'vue-content-loading'
import PreviewNav from './PreviewNav'

export default {
  components: {
    PreviewNav,
    VclFacebook,
    VclInstagram
  },
  data: () => ({
    view: 'mobile'
  }),
  methods: {
    setView (value) {
      console.log(value)
      this.view = value
    }
  }
}
</script>

<style lang="scss" scoped>
  svg + svg { margin-top: 2rem; }

  #preview {
    height: 100%;
  }

  .inner-preview {
    margin: 0 auto;
    max-width: 100%;
    transition: max-width 300ms ease;
    .mobile & {
      max-width: 320px;
      /* max-height: 480px; */
    }
  }
</style>