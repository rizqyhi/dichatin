import AuthState from '@/core/AuthState'
import View from '@/core/View'
import Home from '@/plugins/Home'

class Dichatin {
  core = {}

  constructor () {
    this.core.authState = new AuthState()
    this.core.view = View.render()
  }

  setAuthenticated (state) {
    this.core.authState.setAuthenticated(state)
  }

  isAuthenticated () {
    return this.core.authState.isAuthenticated()
  }

  getView () {
    return this.core.view
  }

  registerPlugin (plugin) {
    this.core.view.$emit('plugins:register', Home)
  }
}

export default Dichatin
