<template>
  <div class="home">
    <h1>Welcome to Yugyugu!</h1>
    <p>Enter the <router-link to="/builder/content">Builder</router-link></p>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
  }
}
</script>

<style lang="scss" scoped>
  .home {
    padding: 2rem;
  }
</style>