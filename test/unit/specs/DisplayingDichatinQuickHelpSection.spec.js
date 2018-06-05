import { shallowMount } from '@vue/test-utils'
import AuthInformationProvider from '@/core/AuthInformationProvider'
import PersistedSectionManager from '@/core/PersistedSectionManager'
import Dichatin from '@/core/View/Dichatin'

describe('Displaying Dichatin quick help section', () => {
  let wrapper

  beforeEach(() => {
    const chatProvider = {
      isLogin: () => true
    }
    const authInformationProvider = new AuthInformationProvider(chatProvider)
    const persistedSectionManager = new PersistedSectionManager()
    wrapper = shallowMount(Dichatin, {
      propsData: { authInformationProvider, persistedSectionManager },
      data: { isChatWindowShown: true }
    })
  })

  context('When quick help button was clicked', () => {
    it('should execute event handler method', () => {
      const spy = sinon.spy()
      wrapper.setMethods({ setActiveSection: spy })
      wrapper.find('.dichatin-nav__quick-help').trigger('click')

      expect(spy.calledWith('quick-help')).to.be.true()
    })

    it('should change active section state', () => {
      wrapper.find('.dichatin-nav__quick-help').trigger('click')

      expect(wrapper.vm.activeSection).to.equal('quick-help')
    })

    it('should see quick help section', () => {
      wrapper.find('.dichatin-nav__quick-help').trigger('click')

      expect(wrapper.find('.dichatin-section__quick-help').isVisible()).to.be.true()
    })

    it('should not see home section', () => {
      wrapper.find('.dichatin-nav__quick-help').trigger('click')

      expect(wrapper.find('.dichatin-section__home').isVisible()).to.be.false()
    })
  })
})
