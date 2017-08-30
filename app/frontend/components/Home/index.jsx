import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getLastShorts } from 'store/actions/shorts'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
// import RaisedButton from 'material-ui/RaisedButton'
import { btn, btnPrimary, btnLg, btnSecondary } from 'bootstrap-css-modules/css/buttons.css'
// import Styles from 'style-loader!css-loader?modules!./styles.css';
import { container } from 'bootstrap-css-modules/css/container.css'
import { dropdownMenu, dropdownMenuRight, dropdownItem, dropdownToggle, show } from 'bootstrap-css-modules/css/dropdown.css'
import { formControl, formGroup, inputGroupAddon, inputGroup, inputGroupBtn } from 'bootstrap-css-modules/css/forms.css'
import LastAdded from './LastAdded'


console.log('buttons', container)

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
        <div className={formGroup}>
          <label htmlFor="hhh">Hello</label>
          <div className={inputGroup}>
            <input id="hhh" className={formControl} />
            <span className={inputGroupAddon}>@example.com</span>
          </div>
        </div>
        <div className={inputGroup}>
          <input type="text" className={formControl} />
          <div className={`${inputGroupBtn} ${show}`}>
            <button type="button" className={`${btnSecondary} ${btn} ${btnLg} ${dropdownToggle}`}>
              Action
            </button>
            <div className={`${dropdownMenu} ${dropdownMenuRight} ${show}`}>
              <a className={dropdownItem} href="/">Action</a>
              <a className={dropdownItem} href="/">Another action</a>
              <a className={dropdownItem} href="/">Something else here</a>
              <a className={dropdownItem} href="/">Separated link</a>
            </div>
          </div>
        </div>
        <button className={`${btnPrimary} ${btn} ${btnLg}`}>tttt</button>
        {/* <RaisedButton label="Dialog" onClick={this.handleOpen} /> */}
        <LastAdded
          title="Короткометражки"
          name="shorts"
          content={this.props.lastShorts.data}
          goToCreatePage={this.goToCreatePage}
          showMoreDetails={this.handleOpen}
        />
        {/* <LastAdded
          title="Полнометражки"
          name="full-length"
          content={this.props.lastShorts.data}
          goToCreatePage={this.goToCreatePage}
        />
        <LastAdded
          title="Серии"
          name="serials"
          content={this.props.lastShorts.data}
          goToCreatePage={this.goToCreatePage}
        />
        <LastAdded
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
    ownProps
  }),
  dispatch => ({
    onGetLastShorts: () => {
      dispatch(getLastShorts())
    }
  })
)(Index)

Index.propTypes = {
  onGetLastShorts: PropTypes.func.isRequired,
  lastShorts: PropTypes.shape({
    data: PropTypes.array
  }).isRequired,
  router: PropTypes.shape({
    push: PropTypes.func
  }).isRequired
}
