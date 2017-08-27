import { errorLoading, loadRoute } from './helpers'

export default ({
  getComponent(location, cb) {
    System.import('Serials')
      .then(loadRoute(cb))
      .catch(errorLoading)
  },
  childRoutes: [
    {
      path: 'serials',
      getComponent(location, cb) {
        System.import('Serials/List')
          .then(loadRoute(cb))
          .catch(errorLoading)
      }
    },
    {
      path: 'serials/create',
      getComponent(location, cb) {
        System.import('Serials/Create')
          .then(loadRoute(cb))
          .catch(errorLoading)
      }
    },
    {
      path: 'serials/:id',
      getComponent(location, cb) {
        System.import('Serials/Show')
          .then(loadRoute(cb))
          .catch(errorLoading)
      }
    },
    {
      path: 'serials/:id/edit',
      getComponent(location, cb) {
        System.import('Serials/Edit')
          .then(loadRoute(cb))
          .catch(errorLoading)
      }
    }
  ]
})
