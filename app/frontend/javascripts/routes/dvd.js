import { errorLoading, loadRoute } from './helpers'

export default ({
  getComponent(location, cb) {
    System.import('DVD')
      .then(loadRoute(cb))
      .catch(errorLoading)
  },
  childRoutes: [
    {
      path: 'dvd',
      getComponent(location, cb) {
        System.import('DVD/List')
          .then(loadRoute(cb))
          .catch(errorLoading)
      }
    },
    {
      path: 'dvd/create',
      getComponent(location, cb) {
        System.import('DVD/Create')
          .then(loadRoute(cb))
          .catch(errorLoading)
      }
    },
    {
      path: 'dvd/:id',
      getComponent(location, cb) {
        System.import('DVD/Show')
          .then(loadRoute(cb))
          .catch(errorLoading)
      }
    },
    {
      path: 'dvd/:id/edit',
      getComponent(location, cb) {
        System.import('DVD/Edit')
          .then(loadRoute(cb))
          .catch(errorLoading)
      }
    }
  ]
})
