import { shallowMount } from '@vue/test-utils'
import AuthInformationProvider from '@/core/AuthInformationProvider'
import PersistedSectionManager from '@/core/PersistedSectionManager'
import Dichatin from '@/core/View/Dichatin'

const persistedSectionManager = new PersistedSectionManager()

describe('Persisting active section between pages', () => {
  let wrapper

  beforeEach(() => {
    const chatProvider = {
      isLogin: () => true
    }
    const authInformationProvider = new AuthInformationProvider(chatProvider)
    wrapper = shallowMount(Dichatin, {
      propsData: { authInformationProvider, persistedSectionManager },
      data: { isChatWindowShown: true }
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
      wrapper.find('.dichatin-nav__chat').trigger('click')

      expect(persistedSectionManager.getActiveSection()).to.equal('chat')
    })
  })

  context('When user navigated to other page and dichatin toggle was clicked', () => {
    context('When persisted data was not available', () => {
      it('should see current state of active section was home', () => {
        const chatProvider = {
          isLogin: () => true
        }
        const authInformationProvider = new AuthInformationProvider(chatProvider)
        const persistedSectionManager = new PersistedSectionManager()
        wrapper = shallowMount(Dichatin, {
          propsData: { authInformationProvider, persistedSectionManager }
        })

        expect(wrapper.vm.activeSection).to.equal('home')
      })

      it('should see home section', () => {
        const chatProvider = {
          isLogin: () => true
        }
        const authInformationProvider = new AuthInformationProvider(chatProvider)
        const persistedSectionManager = new PersistedSectionManager()
        wrapper = shallowMount(Dichatin, {
          propsData: { authInformationProvider, persistedSectionManager },
          data: { isChatWindowShown: true }
        })

        expect(wrapper.find('.dichatin-section__home').isVisible()).to.be.true()
      })
    })

    context('When persisted data was available', () => {
      it('should see current state of active section was chat', () => {
        expect(persistedSectionManager.getActiveSection()).to.equal('chat')
      })

      it('should see chat section', () => {
        expect(wrapper.find('.dichatin-section__chat').isVisible()).to.be.true()
      })
    })
  })
})
