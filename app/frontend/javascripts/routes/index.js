import App from 'App'
import home from './home'
import shorts from './shorts'
import fullLength from './full-length'
import serials from './serials'
import dvd from './dvd'

const routes = {
  component: App,
  childRoutes: [
    home,
    shorts,
    fullLength,
    serials,
    dvd
  ]
}

export default routes
