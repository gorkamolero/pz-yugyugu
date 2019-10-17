<template>
  <div id="email-builder">
    <div class="left-panel" v-bar>
      <div class="inner-panel">
        <Control />
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
import Preview from '@/components/preview/Preview'
import Control from '@/components/control/Control'

export default {
  components: { Preview, Control }
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