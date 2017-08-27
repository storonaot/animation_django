import { errorLoading, loadRoute } from './helpers'

export default ({
  path: 'full-length',
  getComponent(location, cb) {
    System.import('FullLength')
      .then(loadRoute(cb))
      .catch(errorLoading)
  }
})
