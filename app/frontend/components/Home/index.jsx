import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getLastShorts } from 'store/actions/shorts'
import { getLastFullLength } from 'store/actions/fullLength'
import { getLastDVDs } from 'store/actions/dvd'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
// import RaisedButton from 'material-ui/RaisedButton'
// import Styles from 'style-loader!css-loader?modules!./styles.css';
import LastAdded from './LastAdded'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
    this.goToCreatePage = this.goToCreatePage.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  componentDidMount() {
    this.props.onGetLastShorts()
    this.props.onGetLastFullLength()
    this.props.onGetLastDVDs()
  }

  handleOpen(id) {
    console.log('id', id)
    this.setState({ open: true })
  }

  handleClose() {
    this.setState({ open: false })
  }

  goToCreatePage(name) {
    this.props.router.push(`${name}/create`)
  }

  render() {
    const actions = [
      <FlatButton
        label="Закрыть"
        primary
        onClick={this.handleClose}
      />
    ]
    return (
      <div className="x-container">
        {/* <RaisedButton label="Dialog" onClick={this.handleOpen} /> */}
        <LastAdded
          title="Короткометражки"
          name="shorts"
          content={this.props.lastShorts.data}
          goToCreatePage={this.goToCreatePage}
          showMoreDetails={this.handleOpen}
        />
        <LastAdded
          title="Полнометражки"
          name="fulllength"
          content={this.props.lastFullLength.data}
          goToCreatePage={this.goToCreatePage}
          showMoreDetails={this.handleOpen}
        />
        <LastAdded
          title="DVD"
          name="dvds"
          content={this.props.lastDVDs.data}
          goToCreatePage={this.goToCreatePage}
          showMoreDetails={this.handleOpen}
        />
        {/* <LastAdded
          title="DVD"
          name="dvd"
          content={this.props.lastShorts.data}
          goToCreatePage={this.goToCreatePage}
        /> */}
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          The actions in this window were passed in as an array of React objects.
        </Dialog>
      </div>
    )
  }
}

export default connect(
  (state, ownProps) => ({
    lastShorts: state.lastShorts,
    lastFullLength: state.lastFullLength,
    lastDVDs: state.lastDVDs,
    ownProps
  }),
  dispatch => ({
    onGetLastShorts: () => {
      dispatch(getLastShorts())
    },
    onGetLastFullLength: () => {
      dispatch(getLastFullLength())
    },
    onGetLastDVDs: () => {
      dispatch(getLastDVDs())
    }
  })
)(Index)

Index.propTypes = {
  onGetLastShorts: PropTypes.func.isRequired,
  lastShorts: PropTypes.shape({
    data: PropTypes.array
  }).isRequired,
  onGetLastFullLength: PropTypes.func.isRequired,
  lastFullLength: PropTypes.shape({
    data: PropTypes.array
  }).isRequired,
  onGetLastDVDs: PropTypes.func.isRequired,
  lastDVDs: PropTypes.shape({
    data: PropTypes.array
  }).isRequired,
  router: PropTypes.shape({
    push: PropTypes.func
  }).isRequired
}
