import { shallowMount } from '@vue/test-utils'
import AuthInformationProvider from '@/core/AuthInformationProvider'
import Dichatin from '@/core/View/Dichatin'

describe('Hiding chat window', () => {
  let wrapper

  beforeEach(() => {
    const chatProvider = {
      isLogin: () => true
    }
    const authInformationProvider = new AuthInformationProvider(chatProvider)
    wrapper = shallowMount(Dichatin, {
      propsData: { authInformationProvider },
      data: { isChatWindowShown: true }
    })
  })

  context('When chat window was shown and chat toggle was clicked', () => {
    it('should execute event handler method', () => {
      const spy = sinon.spy()
      wrapper.setMethods({ toggleChatWindow: spy })
      wrapper.find('.dichatin-toggle').trigger('click')

      expect(spy.calledOnce).to.be.true()
    })

    it('should change the chat window state', () => {
      wrapper.find('.dichatin-toggle').trigger('click')

      expect(wrapper.vm.isChatWindowShown).to.be.false()
    })

    it('should see chat window rendered', () => {
      wrapper.find('.dichatin-toggle').trigger('click')

      expect(wrapper.find('.dichatin-window').isVisible()).to.be.false()
    })
  })
})
