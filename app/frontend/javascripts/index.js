import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { syncHistoryWithStore } from 'react-router-redux'

import App from 'App'
import reducer from 'store/reducers'

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
const history = syncHistoryWithStore(hashHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
