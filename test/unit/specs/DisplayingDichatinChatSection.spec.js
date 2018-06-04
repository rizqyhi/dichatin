import { shallowMount } from '@vue/test-utils'
import AuthInformationProvider from '@/core/AuthInformationProvider'
import Dichatin from '@/core/View/Dichatin'

describe('Displaying Dichatin chat section', () => {
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

  context('When chat button was clicked', () => {
    it('should execute event handler method', () => {
      const spy = sinon.spy()
      wrapper.setMethods({ setActiveSection: spy })
      wrapper.find('.dichatin-nav__chat').trigger('click')

      expect(spy.calledWith('chat')).to.be.true()
    })
    it('should change active section state')
    it('should see chat section')
    it('should not see home section')
  })

  context('When user was not authenticated', () => {
    it('should see login button rendered in chat section')
  })

  context('When user was authenticated', () => {
    it('should see not login button rendered in chat section')
  })
})
