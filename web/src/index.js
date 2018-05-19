import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { Header } from 'microbz-components'

const App = () => (
    <div>
        <Header />
        Foo
    </div>
)

ReactDOM.render(<App />, document.getElementById('root'))

registerServiceWorker()
