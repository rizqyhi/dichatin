import { shallowMount } from '@vue/test-utils'
import AuthInformationProvider from '@/core/AuthInformationProvider'
import Dichatin from '@/core/View/Dichatin'

describe('Displaying chat window', () => {
  let wrapper

  beforeEach(() => {
    const chatProvider = {
      isLogin: () => true
    }
    const authInformationProvider = new AuthInformationProvider(chatProvider)
    wrapper = shallowMount(Dichatin, {
      propsData: { authInformationProvider }
    })
  })

  context('When chat toggle was clicked', () => {
    it('should execute event handler method', () => {
      const spy = sinon.spy()
      wrapper.setMethods({ toggleChatWindow: spy })
      wrapper.find('.dichatin-toggle').trigger('click')

      expect(spy.calledOnce).to.be.true()
    })

    it('should change the chat window state', () => {
      wrapper.find('.dichatin-toggle').trigger('click')

      expect(wrapper.vm.isChatWindowShown).to.be.true()
    })

    it('should see chat window rendered', () => {
      wrapper.find('.dichatin-toggle').trigger('click')

      expect(wrapper.find('.dichatin-window').isVisible()).to.be.true()
    })

    it('should see home button rendered', () => {
      wrapper.find('.dichatin-toggle').trigger('click')

      expect(wrapper.find('.dichatin-nav__home').isVisible()).to.be.true()
    })

    it('should see quick help button rendered', () => {
      wrapper.find('.dichatin-toggle').trigger('click')

      expect(wrapper.find('.dichatin-nav__quick-help').isVisible()).to.be.true()
    })
  })

  context('When user was not authenticated', () => {
    it('should see non-login chat button rendered', () => {
      const chatProvider = {
        isLogin: () => false
      }
      const authInformationProvider = new AuthInformationProvider(chatProvider)
      wrapper = shallowMount(Dichatin, {
        propsData: { authInformationProvider }
      })
      wrapper.find('.dichatin-toggle').trigger('click')

      expect(wrapper.find('.dichatin-nav__chat').classes()).to.contain('dichatin-nav__chat--disabled')
      expect(wrapper.find('.dichatin-nav__chat').classes()).to.not.contain('dichatin-nav__chat--active')
    })
  })

  context('When user was authenticated', () => {
    it('should see active chat button rendered', () => {
      wrapper.find('.dichatin-toggle').trigger('click')

      expect(wrapper.find('.dichatin-nav__chat').classes()).to.contain('dichatin-nav__chat--active')
      expect(wrapper.find('.dichatin-nav__chat').classes()).to.not.contain('dichatin-nav__chat--disabled')
    })
  })
})