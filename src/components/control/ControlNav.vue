<template>
  <nav class="nav">
    <v-btn-toggle rounded dark>
      <v-btn to="/builder/content">
        <v-icon>mdi-wrench</v-icon>
      </v-btn>

      <v-btn to="/builder/style">
        <v-icon>mdi-palette</v-icon>
      </v-btn>
    </v-btn-toggle>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .nav {
    position: absolute;
    top: 0; right: 0;
    padding: 2rem;
  }
</style>