import { shallowMount } from '@vue/test-utils'
import AuthInformationProvider from '@/core/AuthInformationProvider'
import Dichatin from '@/core/View/Dichatin'

describe('Switching Dichatin active section', () => {
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
    it('should see active section state was changed', () => {
      wrapper.find('.dichatin-nav__chat').trigger('click')

      expect(wrapper.vm.activeSection).to.equal('chat')
    })

    it('should see chat section', () => {
      wrapper.find('.dichatin-nav__chat').trigger('click')

      expect(wrapper.find('.dichatin-section__chat').isVisible()).to.be.true()
    })

    it('should not see other sections')
  })

  context('When home button was clicked', () => {
    it('should see active section state was changed')
    it('should see home section')
    it('should not see other sections')
  })
})
