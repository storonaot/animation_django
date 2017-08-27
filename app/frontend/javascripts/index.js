import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { syncHistoryWithStore } from 'react-router-redux'
import App from 'App'
import Home from 'Home'
import FullLength from 'FullLength'
import Serials from 'Serials'
import DVD from 'DVD'


import ShortsLayout from 'Shorts'
import ShortShow from 'Shorts/Show'
import ShortEdit from 'Shorts/Edit'
import ShortCreate from 'Shorts/Create'
import ShortsList from 'Shorts/List'

import reducer from 'store/reducers'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
const history = syncHistoryWithStore(hashHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="shorts" component={ShortsLayout}>
          <IndexRoute component={ShortsList} />
          <Route path="create" component={ShortCreate} />
          <Route path=":id" component={ShortShow} />
          <Route path=":id/edit" component={ShortEdit} />
        </Route>
        <Route path="full-length" component={FullLength} />
        <Route path="serials" component={Serials} />
        <Route path="dvd" component={DVD} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)

// getComponent={(state, cb) => {
//   require.ensure()
// }}
