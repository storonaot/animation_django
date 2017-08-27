import { errorLoading, loadRoute } from './helpers'

export default ({
  path: '/',
  getComponent(location, cb) {
    System.import('Home')
      .then(loadRoute(cb))
      .catch(errorLoading)
  }
})
