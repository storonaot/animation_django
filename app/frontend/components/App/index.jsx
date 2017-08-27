import HeaderComp from 'Header'
import PropTypes from 'prop-types'
import { Grid } from 'react-flexbox-grid'
import { MuiThemeProvider } from 'material-ui/styles'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import BreadCrumbs from '_shared/BreadCrumbs'
import muiTheme from '../../javascripts/muiTheme'

const App = ({ children, router }) => (
  <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
    <div>
      <HeaderComp router={router} />
      <Grid fluid>
        <BreadCrumbs />
        {children}
      </Grid>
    </div>
  </MuiThemeProvider>
)

App.propTypes = {
  children: PropTypes.shape({}).isRequired,
  router: PropTypes.shape({}).isRequired
}

export default App
