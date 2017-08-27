import App from 'App'

function errorLoading(err) {
  console.error('Dynamic page loading failed', err)
}

function loadRoute(cb) {
  return module => cb(null, module.default)
}

const routes = {
  component: App,
  childRoutes: [
    {
      path: '/',
      getComponent(location, cb) {
        System.import('Home')
          .then(loadRoute(cb))
          .catch(errorLoading)
      }
    },
    {
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
          path: 'create',
          getComponent(location, cb) {
            System.import('Shorts/Create')
              .then(loadRoute(cb))
              .catch(errorLoading)
          }
        },
        {
          path: ':id',
          getComponent(location, cb) {
            System.import('Shorts/Show')
              .then(loadRoute(cb))
              .catch(errorLoading)
          }
        },
        {
          path: ':id/edit',
          getComponent(location, cb) {
            System.import('Shorts/Edit')
              .then(loadRoute(cb))
              .catch(errorLoading)
          }
        }
      ]
    },
    {
      path: 'full-length',
      getComponent(location, cb) {
        System.import('FullLength')
          .then(loadRoute(cb))
          .catch(errorLoading)
      }
    }
  ]
}

export default routes
