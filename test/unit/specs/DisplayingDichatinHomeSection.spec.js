import { shallowMount } from '@vue/test-utils'
import AuthInformationProvider from '@/core/AuthInformationProvider'
import Dichatin from '@/core/View/Dichatin'

describe('Displaying Dichatin home section', () => {
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
    it('should see chat window rendered', () => {
      wrapper.find('.dichatin-toggle').trigger('click')

      expect(wrapper.find('.dichatin-window').isVisible()).to.be.true()
    })

    it('should see active home button was rendered', () => {
      wrapper.find('.dichatin-toggle').trigger('click')

      expect(wrapper.find('.dichatin-nav__home').classes()).to.contain('dichatin-nav--active')
    })

    it('should see home section was rendered', () => {
      wrapper.find('.dichatin-toggle').trigger('click')

      expect(wrapper.find('.dichatin-section__home').isVisible()).to.be.true()
    })
  })

  context('When user was not authenticated', () => {
    it('should see login button rendered in home section')
  })

  context('When user was authenticated', () => {
    it('should not see login button rendered in home section')
  })
})
