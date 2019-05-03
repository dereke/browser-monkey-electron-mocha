# Test an app using Browser Monkey and electron-mocha

```bash
yarn add browser-monkey electron electron-mocha --dev
yarn add react react-dom
```

Now create a test file: `test/greetingSpec.js`
For simplicity we will create our react application in the test file.

```js
const reactMonkey = require('browser-monkey/react')
class HelloWorld extends React.Component {
  render () {
    return React.createElement('div', {className: 'greeting'}, 'Hello World')
  }
}

describe('greeting', () => {
  it('renders a greeting', async () => {
    const monkey = reactMonkey(new HelloWorld())
    await monkey.find('.greeting').shouldHave({text: 'Hello World'})
  })
})
```

Now you can run the test using `electron-mocha`, the `--renderer` flag tells electron to run the test in it's built in browser, the `--interactive` flag makes the browser visible so that you can debug or inspect the test

```bash
electron-mocha test/**/*Spec.js --renderer --interactive 
```
