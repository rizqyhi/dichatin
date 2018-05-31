<template>
  <div class="dichatin">
    <a href="#" class="dichatin-toggle" @click="toggleChatWindow()">Toggle Chat</a>
    <div class="dichatin-window" v-show="isChatWindowShown">
      <a href="#" class="dichatin-nav__home">Home</a>
      <a href="#" class="dichatin-nav__quick-help">Help</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isChatWindowShown: false
    }
  },

  methods: {
    toggleChatWindow () {
      this.isChatWindowShown = !this.isChatWindowShown
    }
  }
}
</script>

<style>

</style>
