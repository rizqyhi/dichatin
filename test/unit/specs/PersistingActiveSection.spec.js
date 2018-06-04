import { shallowMount } from '@vue/test-utils'
import AuthInformationProvider from '@/core/AuthInformationProvider'
import PersistedSectionManager from '@/core/PersistedSectionManager'
import Dichatin from '@/core/View/Dichatin'

describe('Persisting active section between pages', () => {
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

  context('When chat button was clicked', () => {
    it('should called persisted manager method with correct argument', () => {
      const spy = sinon.spy()
      wrapper.setProps({ persistedSectionManager: { setActiveSection: spy } })
      wrapper.find('.dichatin-nav__chat').trigger('click')

      expect(spy.calledWith('chat')).to.be.true()
    })

    it('should returned correct data from persisted manager', () => {
      const persistedSectionManager = new PersistedSectionManager()
      wrapper.setProps({ persistedSectionManager })
      wrapper.find('.dichatin-nav__chat').trigger('click')

      expect(persistedSectionManager.getActiveSection()).to.equal('chat')
    })
  })

  context('When user navigated to other page and chat button was clicked', () => {
    it('should see chat section')
  })
})
