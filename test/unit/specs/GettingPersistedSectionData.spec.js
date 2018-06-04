import PersistedSectionManager from '@/core/PersistedSectionManager'

describe('Getting persisted section data', () => {
  context('When no persisted section data was existed', () => {
    it('should returned home as default active section', () => {
      const persistedSectionManager = new PersistedSectionManager()

      expect(persistedSectionManager.getActiveSection()).to.equal('home')
    })
  })

  context('When persisted section data was existed', () => {
    it('should returned active section name', () => {
      const persistedSectionManager = new PersistedSectionManager()
      persistedSectionManager.setActiveSection('chat')

      expect(persistedSectionManager.getActiveSection()).to.equal('chat')
    })
  })
})
