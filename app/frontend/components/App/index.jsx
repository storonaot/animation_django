import HeaderComp from 'Header'
import PropTypes from 'prop-types'
import { Grid } from 'react-flexbox-grid'
import { MuiThemeProvider } from 'material-ui/styles'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import BreadCrumbs from '_shared/BreadCrumbs'
import muiTheme from '../../javascripts/muiTheme'

const App = ({ children, router }) => {
  const crumbs = router.getCurrentLocation().pathname.split('/')
  return (
    <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
      <div>
        <HeaderComp router={router} />
        <Grid fluid>
          <BreadCrumbs crumbs={crumbs} />
          {children}
        </Grid>
      </div>
    </MuiThemeProvider>
  )
}

App.propTypes = {
  children: PropTypes.shape({}).isRequired,
  router: PropTypes.shape({}).isRequired
}

export default App
