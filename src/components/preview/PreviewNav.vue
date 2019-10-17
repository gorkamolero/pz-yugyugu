<template>
  <nav class="nav">
    <v-btn-toggle rounded dark>
      <v-btn @click="$emit('change-view', 'mobile')">
        <v-icon>mdi-cellphone</v-icon>
      </v-btn>

      <v-btn @click="$emit('change-view', 'laptop')">
        <v-icon>mdi-laptop</v-icon>
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
    top: 0; left: 0;
    padding: 2rem;
  }
</style>