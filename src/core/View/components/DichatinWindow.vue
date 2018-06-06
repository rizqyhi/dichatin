<template>
  <div class="dichatin-window">
    <dichatin-section-home v-show="isActiveSection('home')" v-bind="{ isUserLoggedIn }"></dichatin-section-home>
    <dichatin-section-chat v-show="isActiveSection('chat')" v-bind="{ isUserLoggedIn, chatProvider }"></dichatin-section-chat>
    <dichatin-section-quick-help v-show="isActiveSection('quick-help')"></dichatin-section-quick-help>
    <a href="#" class="dichatin-nav dichatin-nav__home" :class="navActiveClass('home')" @click="setActiveSection('home')">Home</a>
    <a href="#" class="dichatin-nav dichatin-nav__chat" :class="Object.assign({}, navChatClass, navActiveClass('chat'))" @click="setActiveSection('chat')">Chat</a>
    <a href="#" class="dichatin-nav dichatin-nav__quick-help" :class="navActiveClass('quick-help')" @click="setActiveSection('quick-help')">Help</a>
  </div>
</template>

<script>
import DichatinSectionHome from './DichatinSectionHome'
import DichatinSectionChat from './DichatinSectionChat'
import DichatinSectionQuickHelp from './DichatinSectionQuickHelp'

export default {
  components: { DichatinSectionHome, DichatinSectionChat, DichatinSectionQuickHelp },

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
      activeSection: this.persistedSectionManager.getActiveSection()
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

<style lang="scss">
.dichatin-window {
  height: 480px;
  display: flex;
  transform: translateY(100%);
  opacity: 0;
  transition: all 0.3s ease;
  border-radius: 3px;
  box-shadow: 0 0 50px 0 rgba(0,0,0,0.08);
}

.dichatin-window--active {
  opacity: 1;
  transform: translateY(-70px)
}

.dichatin-window__content {
  width: 400px;
}

.dichatin-window__nav {
  width: 60px;
  background: #f5f5f5;
  border-radius: 0 3px 3px 0;
}

.dichatin-window__nav-item {
  display: block;
  padding: 10px;
  text-align: center;

  &--active {
    background: #e8e8e8
  }

  &:first-child {
    border-top-right-radius: 3px;
  }
}
</style>
