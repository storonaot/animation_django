import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getLastShorts } from 'store/actions/shorts'

import LastAdded from './LastAdded'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.goToCreatePage = this.goToCreatePage.bind(this)
  }

  componentDidMount() {
    this.props.onGetLastShorts()
  }

  goToCreatePage(name) {
    this.props.router.push(`${name}/create`)
  }

  render() {
    return (
      <div>
        <LastAdded
          title="Короткометражки"
          name="shorts"
          content={this.props.lastShorts.data}
          goToCreatePage={this.goToCreatePage}
        />
        <LastAdded
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
        />
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
