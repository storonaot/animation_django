import { errorLoading, loadRoute } from './helpers'

export default ({
  path: 'serials',
  getComponent(location, cb) {
    System.import('Serials')
      .then(loadRoute(cb))
      .catch(errorLoading)
  }
})
