import { mount } from '@vue/test-utils'
import AuthInformationProvider from '@/core/AuthInformationProvider'
import PersistedSectionManager from '@/core/PersistedSectionManager'
import Dichatin from '@/core/DichatinWidget/Dichatin'
import DichatinToggle from '@/core/DichatinWidget/components/DichatinToggle'

describe('Displaying chat window', () => {
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
    it('should execute event handler method', () => {
      const spy = sinon.spy()
      wrapper.setMethods({ toggleChatWindow: spy })
      wrapper.find(DichatinToggle).trigger('click')

      expect(spy.calledOnce).to.be.true()
    })

    it('should change the chat window state', () => {
      wrapper.find(DichatinToggle).trigger('click')

      expect(wrapper.vm.isChatWindowShown).to.be.true()
    })

    it('should see chat window rendered', () => {
      wrapper.find(DichatinToggle).trigger('click')

      expect(wrapper.find('.dichatin-window').isVisible()).to.be.true()
    })

    it('should see home button rendered', () => {
      wrapper.find(DichatinToggle).trigger('click')

      expect(wrapper.find('.dichatin-nav__home').isVisible()).to.be.true()
    })

    it('should see quick help button rendered', () => {
      wrapper.find(DichatinToggle).trigger('click')

      expect(wrapper.find('.dichatin-nav__quick-help').isVisible()).to.be.true()
    })
  })

  context('When user was not authenticated', () => {
    it('should see non-login chat button rendered', () => {
      const chatProvider = {
        isLogin: () => false
      }
      const authInformationProvider = new AuthInformationProvider(chatProvider)
      const persistedSectionManager = new PersistedSectionManager()
      wrapper = mount(Dichatin, {
        propsData: { authInformationProvider, persistedSectionManager }
      })
      wrapper.find(DichatinToggle).trigger('click')

      expect(wrapper.find('.dichatin-nav__chat').classes()).to.contain('dichatin-nav__chat--disabled')
      expect(wrapper.find('.dichatin-nav__chat').classes()).to.not.contain('dichatin-nav__chat--active')
    })
  })

  context('When user was authenticated', () => {
    it('should see active chat button rendered', () => {
      wrapper.find(DichatinToggle).trigger('click')

      expect(wrapper.find('.dichatin-nav__chat').classes()).to.contain('dichatin-nav__chat--active')
      expect(wrapper.find('.dichatin-nav__chat').classes()).to.not.contain('dichatin-nav__chat--disabled')
    })
  })
})
