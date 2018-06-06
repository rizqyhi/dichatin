import { mount } from '@vue/test-utils'
import AuthInformationProvider from '@/core/AuthInformationProvider'
import PersistedSectionManager from '@/core/PersistedSectionManager'
import DichatinWindow from '@/core/View/components/DichatinWindow'
import DichatinSectionHome from '@/core/View/components/DichatinSectionHome'

describe('Displaying Dichatin chat section', () => {
  let wrapper

  beforeEach(() => {
    const chatProvider = {
      isLogin: () => true
    }
    const authInformationProvider = new AuthInformationProvider(chatProvider)
    const persistedSectionManager = new PersistedSectionManager()
    wrapper = mount(DichatinWindow, {
      propsData: { authInformationProvider, persistedSectionManager }
    })
  })

  context('When chat button was clicked', () => {
    it('should execute event handler method', () => {
      const spy = sinon.spy()
      wrapper.setMethods({ setActiveSection: spy })
      wrapper.find('.dichatin-nav__chat').trigger('click')

      expect(spy.calledWith('chat')).to.be.true()
    })

    it('should change active section state', () => {
      wrapper.find('.dichatin-nav__chat').trigger('click')

      expect(wrapper.vm.activeSection).to.equal('chat')
    })

    it('should see chat section', () => {
      wrapper.find('.dichatin-nav__chat').trigger('click')

      expect(wrapper.find('.dichatin-section__chat').isVisible()).to.be.true()
    })

    it('should not see home section', () => {
      wrapper.find('.dichatin-nav__chat').trigger('click')

      expect(wrapper.find(DichatinSectionHome).isVisible()).to.be.false()
    })
  })

  context('When user was not authenticated', () => {
    it('should see login button rendered in chat section', () => {
      const chatProvider = {
        isLogin: () => false
      }
      const authInformationProvider = new AuthInformationProvider(chatProvider)
      const persistedSectionManager = new PersistedSectionManager()
      wrapper = mount(DichatinWindow, {
        propsData: { authInformationProvider, persistedSectionManager }
      })
      wrapper.find('.dichatin-nav__chat').trigger('click')

      expect(wrapper.find('.dichatin-login-btn').exists()).to.be.true()
    })
  })

  context('When user was authenticated', () => {
    it('should see not login button rendered in chat section', () => {
      wrapper.find('.dichatin-nav__chat').trigger('click')

      expect(wrapper.find('.dichatin-login-btn').exists()).to.be.false()
    })
  })

  context('When chat provider was throwing unexpected error', () => {
    it('should shown error notice', () => {
      const chatProvider = {
        isLogin: () => false,
        isError: () => true
      }
      const authInformationProvider = new AuthInformationProvider(chatProvider)
      const persistedSectionManager = new PersistedSectionManager()
      wrapper = mount(DichatinWindow, {
        propsData: { authInformationProvider, chatProvider, persistedSectionManager }
      })
      wrapper.find('.dichatin-nav__chat').trigger('click')

      expect(wrapper.find('.dichatin-chat__error').exists()).to.be.true()
    })
  })
})
