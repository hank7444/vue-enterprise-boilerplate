<script>

export default {
  props: ['post'],
  data() {
    return {
      
    }
  },
}
</script>

<template>
  <div>
    <h3 :class="$style.blogPost">
      {{ post.title }}
    </h3>
    <div v-html="post.content" />
    <button @click="$emit('enlarge-text', 0.2)">
      Enlarge text
    </button>
  </div>
</template>

<style lang="scss" module>
@import '@design';

.blogPost {
  padding: 0;
  margin: 0 0 $size-grid-padding;
  text-align: center;
  list-style-type: none;

  > li {
    display: inline-block;
    margin-right: $size-grid-padding;
  }
}
</style>
