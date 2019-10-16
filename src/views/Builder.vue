<template>
  <div id="email-builder">
    <div class="left-panel" v-bar>
      <div class="inner-panel">
        <h1>Builder</h1>
      </div>
    </div>

    <div class="right-panel" v-bar>
      <div class="inner-panel">
        <Preview />
      </div>
    </div>
  </div>
</template>

<script>
import Preview from '@/components/Preview'
export default {
  components: { Preview }
}
</script>

<style lang="scss">
  #email-builder {
    display: flex;

    .inner-panel {
      padding: 2rem;
    }

    .left-panel {
      flex: 2;
    }

    .right-panel {
      border-left: 1px solid gainsboro;
      flex: 2;
    }
  }
</style>