import { shallowMount } from '@vue/test-utils'
import Dichatin from '@/core/View/Dichatin'

describe('Displaying chat window', () => {
  context('When chat toggle was clicked', () => {
    it('should execute event handler method', () => {
      const wrapper = shallowMount(Dichatin)
      const spy = sinon.spy()
      wrapper.setMethods({ toggleChatWindow: spy })
      wrapper.find('.dichatin-toggle').trigger('click')

      expect(spy.calledOnce).to.be.true()
    })

    it('should change the chat window state', () => {
      const wrapper = shallowMount(Dichatin)
      wrapper.find('.dichatin-toggle').trigger('click')

      expect(wrapper.vm.isChatWindowShown).to.be.true()
    })

    it('should see chat window rendered', () => {
      const wrapper = shallowMount(Dichatin)
      wrapper.find('.dichatin-toggle').trigger('click')

      expect(wrapper.find('.dichatin-window').isVisible()).to.be.true()
    })

    it('should see home button rendered', () => {
      const wrapper = shallowMount(Dichatin)
      wrapper.find('.dichatin-toggle').trigger('click')

      expect(wrapper.find('.dichatin-nav__home').isVisible()).to.be.true()
    })

    it('should see quick help button rendered', () => {
      const wrapper = shallowMount(Dichatin)
      wrapper.find('.dichatin-toggle').trigger('click')

      expect(wrapper.find('.dichatin-nav__quick-help').isVisible()).to.be.true()
    })
  })

  context('When user was not authenticated', () => {
    it('should see non-login chat button rendered', () => {
      const wrapper = shallowMount(Dichatin)
      wrapper.find('.dichatin-toggle').trigger('click')

      expect(wrapper.find('.dichatin-nav__chat').classes()).to.contain('dichatin-nav__chat--disabled')
      expect(wrapper.find('.dichatin-nav__chat').classes()).to.not.contain('dichatin-nav__chat--active')
    })
  })
})
