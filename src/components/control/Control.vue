<template>
  <div id="builder">
    <ControlNav />

    <router-view></router-view>
  </div>
</template>

<script>
import ControlNav from './ControlNav'
export default {
  components: { ControlNav }
}
</script>

<style>

</style>