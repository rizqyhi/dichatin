<template>
  <div class="dichatin">
    <dichatin-toggle @click="toggleChatWindow()" :active="isChatWindowShown">Toggle Chat</dichatin-toggle>
    <div class="dichatin-window" v-show="isChatWindowShown">
      <div class="dichatin-section dichatin-section__home" v-show="isActiveSection('home')">
        Dichatin Home
        <a href="#" class="dichatin-login-btn" v-if="!isUserLoggedIn">Login</a>
      </div>
      <div class="dichatin-section dichatin-section__chat" v-show="isActiveSection('chat')">
        Dichatin Chat
        <a href="#" class="dichatin-login-btn" v-if="!isUserLoggedIn">Login</a>
        <div class="dichatin-chat__error">Chat provider sedang error</div>
      </div>
      <div class="dichatin-section dichatin-section__quick-help" v-show="isActiveSection('quick-help')">
        Dichatin Quick Help
      </div>
      <a href="#" class="dichatin-nav dichatin-nav__home" :class="navActiveClass('home')" @click="setActiveSection('home')">Home</a>
      <a href="#" class="dichatin-nav dichatin-nav__chat" :class="Object.assign({}, navChatClass, navActiveClass('chat'))" @click="setActiveSection('chat')">Chat</a>
      <a href="#" class="dichatin-nav dichatin-nav__quick-help" :class="navActiveClass('quick-help')" @click="setActiveSection('quick-help')">Help</a>
    </div>
  </div>
</template>

<script>
import DichatinToggle from './components/DichatinToggle'

export default {
  components: { DichatinToggle },

  props: {
    authInformationProvider: {
      type: Object,
      default: undefined
    },
    chatProvider: {
      type: Object,
      default: undefined
    },
    persistedSectionManager: {
      type: Object,
      default: undefined
    }
  },

  data () {
    return {
      isChatWindowShown: false,
      activeSection: this.persistedSectionManager.getActiveSection()
    }
  },

  computed: {
    isUserLoggedIn () {
      return this.authInformationProvider.isUserLoggedIn()
    },

    isChatProviderError () {
      return this.chatProvider.isError()
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
      this.persistedSectionManager.setActiveSection(section)
    },

    isActiveSection (section) {
      return section === this.activeSection
    },

    navActiveClass (section) {
      return {
        'dichatin-nav--active': this.isActiveSection(section)
      }
    }
  }
}
</script>

<style>

</style>
