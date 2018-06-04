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
    it('should called persisted manager method with correct argument')
  })

  context('When user navigated to other page and chat button was clicked', () => {
    it('should see chat section')
  })
})
