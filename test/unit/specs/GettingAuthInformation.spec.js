import AuthInformationProvider from '@/core/AuthInformationProvider'

describe('Getting auth information', () => {
  context('When no chat provider was found', () => {
    it('should throw an exception', () => {
      const chatProvider = undefined
      const authInformationProvider = new AuthInformationProvider(chatProvider)
      const authInformation = function () {
        authInformationProvider.isUserLoggedIn()
      }

      expect(authInformation).to.throw()
    })
  })

  context('When chat provider was found', () => {
    it('should not throw an exception', () => {
      const chatProvider = {
        isLogin: () => true
      }
      const authInformationProvider = new AuthInformationProvider(chatProvider)
      const authInformation = function () {
        authInformationProvider.isUserLoggedIn()
      }

      expect(authInformation).to.not.throw()
    })
  })

  context('When user is offline', () => {
    it('should return false', () => {
      const chatProvider = {
        isLogin: () => false
      }
      const authInformationProvider = new AuthInformationProvider(chatProvider)
      const authInformation = authInformationProvider.isUserLoggedIn()

      expect(authInformation).to.be.false()
    })
  })

  context('When user is online', () => {
    it('should return true', () => {
      const chatProvider = {
        isLogin: () => true
      }
      const authInformationProvider = new AuthInformationProvider(chatProvider)
      const authInformation = authInformationProvider.isUserLoggedIn()

      expect(authInformation).to.be.true()
    })
  })
})
