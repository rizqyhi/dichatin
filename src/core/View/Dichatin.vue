<template>
  <div class="dichatin">
    <dichatin-toggle @click="toggleChatWindow()" :active="isChatWindowShown">Toggle Chat</dichatin-toggle>
    <dichatin-window v-show="isChatWindowShown" v-bind="{ authInformationProvider, chatProvider, persistedSectionManager}"></dichatin-window>
  </div>
</template>

<script>
import DichatinToggle from './components/DichatinToggle'
import DichatinWindow from './components/DichatinWindow'

export default {
  components: { DichatinToggle, DichatinWindow },

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
