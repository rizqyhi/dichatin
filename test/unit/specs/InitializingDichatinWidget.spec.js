import Vue from 'vue'
import DichatinWidget from '@/core/DichatinWidget'

describe('Initializing Dichatin widget', () => {
  context('When Dichatin was called to be rendered', () => {
    it('should returned Vue instance', () => {
      const widget = DichatinWidget.render()

      expect(widget).to.be.an.instanceOf(Vue)
    })
    it('should be initialized with required props')
  })

  context('When Dichatin was called to be rendered without required props', () => {
    it('should throw an exception')
    it('should not rendered the widget')
  })
})
