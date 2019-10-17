<template>
  <div id="pz-email-builder">
    <router-view/>
  </div>
</template>

<script>
import '@/styles/app.scss'

export default {

}
</script>

<style lang="scss">
  #pz-email-builder {
    font-family: 'Roboto', sans-serif;
    color: rgba(0, 0, 0, .75);
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
