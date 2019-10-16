<template>
  <div id="pz-email-builder">
    <router-view/>
  </div>
</template>

<script>
import '@/styles/modern-normalize.css'
import '@/styles/vuebar.scss'

export default {

}
</script>

<style lang="scss">
  #pz-email-builder {
    font-family: 'Roboto', sans-serif;
    height: 100vh;
    background: whitesmoke;
    padding: 2rem;

    & > div {
      border: 1px solid gainsboro;
      background: white;
      height: 100%;
    }
  }
</style>
