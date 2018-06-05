<template>
  <div class="dichatin-section dichatin-section__home">
    Dichatin Home
    <a href="#" class="dichatin-login-btn" v-if="!isUserLoggedIn">Login</a>
  </div>
</template>

<script>
export default {
  props: {
    isUserLoggedIn: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="sass">

</style>
