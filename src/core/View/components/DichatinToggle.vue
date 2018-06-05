<template>
  <a href="#" class="dichatin-toggle" :class="{'dichatin-toggle--active': active}" v-on="$listeners">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.dichatin-toggle {
  width: 42px;
  height: 42px;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 10px;
  border-radius: 50%;
  background: #d9534f;
  color: #fff;
  text-align: center;
  line-height: 42px;

  &:hover {
    cursor: pointer;
  }
}
</style>
