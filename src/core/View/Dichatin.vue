<template>
  <div class="dichatin">
    <a href="#" class="dichatin-toggle" @click="toggleChatWindow()">Toggle Chat</a>
    <div class="dichatin-window" v-show="isChatWindowShown">
      <div class="dichatin-section__home">
        Dichatin Home
        <a href="#" class="dichatin-login-btn" v-if="!isUserLoggedIn">Login</a>
      </div>
      <a href="#" class="dichatin-nav__home dichatin-nav--active">Home</a>
      <a href="#" class="dichatin-nav__chat" :class="navChatClass" @click="setActiveSection('chat')">Chat</a>
      <a href="#" class="dichatin-nav__quick-help">Help</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    authInformationProvider: {
      type: Object,
      default: undefined
    }
  },

  data () {
    return {
      isChatWindowShown: false
    }
  },

  computed: {
    isUserLoggedIn () {
      return this.authInformationProvider.isUserLoggedIn()
    },

    navChatClass () {
      return {
        'dichatin-nav__chat--disabled': !this.isUserLoggedIn,
        'dichatin-nav__chat--active': this.isUserLoggedIn
      }
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
