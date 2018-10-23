<script>
import Layout from '@layouts/main'

export default {
  page: {
    title: 'Loading page...',
    meta: [{ name: 'description', content: 'Loading page...' }],
  },
  components: { Layout },
}
</script>

<template>
  <Layout>
    <span class="globalClassName">1234</span>
    <transition appear>
      <BaseIcon
        :class="$style.globalClassName"
        name="sync"
        spin
      />
    </transition>
  </Layout>
</template>

<style lang="scss" module>
@import '@design';

:global {
  .globalClassName {
    color: green;
  }
}

.loadingIcon {
  @extend %typography-xxlarge;

  display: block;
  margin: 0 auto;

  // stylelint-disable-next-line selector-class-pattern
  &:global(.v-enter-active) {
    transition: opacity 1s;
  }
  // stylelint-disable-next-line selector-class-pattern
  &:global(.v-enter) {
    opacity: 0;
  }
}
</style>
