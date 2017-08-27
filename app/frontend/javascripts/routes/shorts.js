import { errorLoading, loadRoute } from './helpers'

export default ({
  getComponent(location, cb) {
    System.import('Shorts')
      .then(loadRoute(cb))
      .catch(errorLoading)
  },
  childRoutes: [
    {
      path: 'shorts',
      getComponent(location, cb) {
        System.import('Shorts/List')
          .then(loadRoute(cb))
          .catch(errorLoading)
      }
    },
    {
      path: 'shorts/create',
      getComponent(location, cb) {
        System.import('Shorts/Create')
          .then(loadRoute(cb))
          .catch(errorLoading)
      }
    },
    {
      path: 'shorts/:id',
      getComponent(location, cb) {
        System.import('Shorts/Show')
          .then(loadRoute(cb))
          .catch(errorLoading)
      }
    },
    {
      path: 'shorts/:id/edit',
      getComponent(location, cb) {
        System.import('Shorts/Edit')
          .then(loadRoute(cb))
          .catch(errorLoading)
      }
    }
  ]
})
