import { errorLoading, loadRoute } from './helpers'

export default ({
  path: 'dvd',
  getComponent(location, cb) {
    System.import('DVD')
      .then(loadRoute(cb))
      .catch(errorLoading)
  }
})
