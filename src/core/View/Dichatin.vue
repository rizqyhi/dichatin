<template>
  <div class="dichatin">
    <a href="#" class="dichatin-toggle" @click="toggleChatWindow()">Toggle Chat</a>
    <div class="dichatin-window" v-show="isChatWindowShown">
      <div class="dichatin-section dichatin-section__home" v-show="isActiveSection('home')">
        Dichatin Home
        <a href="#" class="dichatin-login-btn" v-if="!isUserLoggedIn">Login</a>
      </div>
      <div class="dichatin-section dichatin-section__chat">
        Dichatin Chat
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
      isChatWindowShown: false,
      activeSection: 'home'
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
    },

    setActiveSection (section) {
      this.activeSection = section
    },

    isActiveSection (section) {
      return section === this.activeSection
    }
  }
}
</script>

<style>

</style>
