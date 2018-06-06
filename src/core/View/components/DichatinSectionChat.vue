<template>
  <div class="dichatin-section dichatin-section__chat">
    Dichatin Chat
    <a href="#" class="dichatin-login-btn" v-if="!isUserLoggedIn">Login</a>
    <div class="dichatin-chat__error" v-if="isChatProviderError">Chat provider sedang error</div>
  </div>
</template>

<script>
export default {
  props: {
    isUserLoggedIn: {
      type: Boolean,
      default: false
    },
    chatProvider: {
      type: Object,
      default () {
        return {
          isError: () => false
        }
      }
    }
  },

  computed: {
    isChatProviderError () {
      return this.chatProvider.isError()
    }
  }
}
</script>

<style>

</style>
