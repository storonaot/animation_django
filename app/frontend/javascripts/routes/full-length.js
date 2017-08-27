import { errorLoading, loadRoute } from './helpers'

export default ({
  getComponent(location, cb) {
    System.import('FullLength')
      .then(loadRoute(cb))
      .catch(errorLoading)
  },
  childRoutes: [
    {
      path: 'full-length',
      getComponent(location, cb) {
        System.import('FullLength/List')
          .then(loadRoute(cb))
          .catch(errorLoading)
      }
    },
    {
      path: 'full-length/create',
      getComponent(location, cb) {
        System.import('FullLength/Create')
          .then(loadRoute(cb))
          .catch(errorLoading)
      }
    },
    {
      path: 'full-length/:id',
      getComponent(location, cb) {
        System.import('FullLength/Show')
          .then(loadRoute(cb))
          .catch(errorLoading)
      }
    },
    {
      path: 'full-length/:id/edit',
      getComponent(location, cb) {
        System.import('FullLength/Edit')
          .then(loadRoute(cb))
          .catch(errorLoading)
      }
    }
  ]
})
