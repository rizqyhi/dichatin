import { mount } from '@vue/test-utils'
import AuthInformationProvider from '@/core/AuthInformationProvider'
import PersistedSectionManager from '@/core/PersistedSectionManager'
import Dichatin from '@/core/DichatinWidget/Dichatin'
import DichatinToggle from '@/core/DichatinWidget/components/DichatinToggle'
import DichatinWindow from '@/core/DichatinWidget/components/DichatinWindow'
import DichatinSectionHome from '@/core/DichatinWidget/components/DichatinSectionHome'

describe('Displaying Dichatin home section', () => {
  let wrapper

  beforeEach(() => {
    const chatProvider = {
      isLogin: () => true
    }
    const authInformationProvider = new AuthInformationProvider(chatProvider)
    const persistedSectionManager = new PersistedSectionManager()
    wrapper = mount(Dichatin, {
      propsData: { authInformationProvider, persistedSectionManager }
    })
  })

  context('When chat toggle was clicked', () => {
    it('should see chat window rendered', () => {
      wrapper.find(DichatinToggle).trigger('click')

      expect(wrapper.find(DichatinWindow).isVisible()).to.be.true()
    })

    it('should see active home button was rendered', () => {
      wrapper.find(DichatinToggle).trigger('click')

      expect(wrapper.find('.dichatin-nav__home').classes()).to.contain('dichatin-nav--active')
    })

    it('should see home section was rendered', () => {
      wrapper.find(DichatinToggle).trigger('click')

      expect(wrapper.find(DichatinSectionHome).isVisible()).to.be.true()
    })
  })

  context('When user was not authenticated', () => {
    it('should see login button rendered in home section', () => {
      const chatProvider = {
        isLogin: () => false
      }
      const authInformationProvider = new AuthInformationProvider(chatProvider)
      const persistedSectionManager = new PersistedSectionManager()
      wrapper = mount(Dichatin, {
        propsData: { authInformationProvider, persistedSectionManager }
      })
      wrapper.find(DichatinToggle).trigger('click')

      expect(wrapper.find('.dichatin-login-btn').exists()).to.be.true()
    })
  })

  context('When user was authenticated', () => {
    it('should not see login button rendered in home section', () => {
      wrapper.find(DichatinToggle).trigger('click')

      expect(wrapper.find('.dichatin-login-btn').exists()).to.be.false()
    })
  })
})
