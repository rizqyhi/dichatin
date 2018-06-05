import { shallowMount } from '@vue/test-utils'
import AuthInformationProvider from '@/core/AuthInformationProvider'
import PersistedSectionManager from '@/core/PersistedSectionManager'
import DichatinWindow from '@/core/View/components/DichatinWindow'

describe('Switching Dichatin active section from home to quick help', () => {
  let wrapper

  beforeEach(() => {
    const chatProvider = {
      isLogin: () => true
    }
    const authInformationProvider = new AuthInformationProvider(chatProvider)
    const persistedSectionManager = new PersistedSectionManager()
    wrapper = shallowMount(DichatinWindow, {
      propsData: { authInformationProvider, persistedSectionManager }
    })
  })

  context('When quick help button was clicked', () => {
    it('should see active section state was changed', () => {
      wrapper.find('.dichatin-nav__quick-help').trigger('click')

      expect(wrapper.vm.activeSection).to.equal('quick-help')
    })

    it('should see active quick help button', () => {
      wrapper.find('.dichatin-nav__quick-help').trigger('click')

      expect(wrapper.find('.dichatin-nav__quick-help').classes()).to.contain('dichatin-nav--active')
    })

    it('should not see other buttons as active', () => {
      wrapper.find('.dichatin-nav__quick-help').trigger('click')

      expect(wrapper.find('.dichatin-nav:not(.dichatin-nav__quick-help)').classes()).to.not.contain('dichatin-nav--active')
    })

    it('should see quick help section', () => {
      wrapper.find('.dichatin-nav__quick-help').trigger('click')

      expect(wrapper.find('.dichatin-section__quick-help').isVisible()).to.be.true()
    })

    it('should not see other sections', () => {
      wrapper.find('.dichatin-nav__quick-help').trigger('click')

      expect(wrapper.find('.dichatin-section:not(.dichatin-section__quick-help)').isVisible()).to.be.false()
    })
  })
})
