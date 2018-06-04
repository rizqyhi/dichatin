export default class AuthInformationProvider {
  constructor (chatProvider) {
    this.chatProvider = chatProvider
  }

  isUserLoggedIn () {
    if (!this.chatProvider) {
      throw new Error()
    }

    return this.chatProvider.isLogin()
  }
}
