<script>

export default {
  props: ['value'],
}
</script>

<template>
  <div>
  <input 
    type="text"
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
  <slot></slot>
  </div>
</template>

<style lang="scss" module>
@import '@design';


</style>
