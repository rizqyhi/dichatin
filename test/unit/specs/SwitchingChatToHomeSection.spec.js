import { mount } from '@vue/test-utils'
import AuthInformationProvider from '@/core/AuthInformationProvider'
import PersistedSectionManager from '@/core/PersistedSectionManager'
import DichatinWindow from '@/core/DichatinWidget/components/DichatinWindow'

describe('Switching Dichatin section from chat to home', () => {
  let wrapper

  beforeEach(() => {
    const chatProvider = {
      isLogin: () => true
    }
    const authInformationProvider = new AuthInformationProvider(chatProvider)
    const persistedSectionManager = new PersistedSectionManager()
    wrapper = mount(DichatinWindow, {
      propsData: { authInformationProvider, persistedSectionManager },
      data: {
        activeSection: 'chat'
      }
    })
  })

  context('When home button was clicked', () => {
    it('should see active section state was changed', () => {
      wrapper.find('.dichatin-nav__home').trigger('click')

      expect(wrapper.vm.activeSection).to.equal('home')
    })

    it('should see active chat button', () => {
      wrapper.find('.dichatin-nav__home').trigger('click')

      expect(wrapper.find('.dichatin-nav__home').classes()).to.contain('dichatin-nav--active')
    })

    it('should not see other buttons as active', () => {
      wrapper.find('.dichatin-nav__home').trigger('click')

      expect(wrapper.find('.dichatin-nav:not(.dichatin-nav__home)').classes()).to.not.contain('dichatin-nav--active')
    })

    it('should see home section', () => {
      wrapper.find('.dichatin-nav__home').trigger('click')

      expect(wrapper.find('.dichatin-section__home').isVisible()).to.be.true()
    })

    it('should not see other sections', () => {
      wrapper.find('.dichatin-nav__home').trigger('click')

      expect(wrapper.find('.dichatin-section:not(.dichatin-section__home)').isVisible()).to.be.false()
    })
  })
})
