const reactMonkey = require('browser-monkey/react')
const React = require('react')
class HelloWorld extends React.Component {
  render () {
    return React.createElement('div', {className: 'greeting'}, 'Hello World')
  }
}

describe('hello world', () => {
  it('renders a greeting', async () => {
    const monkey = reactMonkey(new HelloWorld())
    await monkey.find('.greeting').shouldHave({text: 'Hello World'})
  })
})
