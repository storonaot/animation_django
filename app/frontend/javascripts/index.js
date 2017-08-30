import { render } from 'react-dom'
import { Router, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { syncHistoryWithStore } from 'react-router-redux'

import reducer from 'store/reducers'
import injectTapEventPlugin from 'react-tap-event-plugin'
import routes from './routes'

injectTapEventPlugin()

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
const history = syncHistoryWithStore(hashHistory, store)

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
)
