export default class PersistedSectionManager {
  activeSection = null

  getActiveSection () {
    return this.activeSection || 'home'
  }

  setActiveSection (section) {
    this.activeSection = section
  }
}
