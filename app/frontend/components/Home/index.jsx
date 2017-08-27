import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getLastShorts } from 'store/actions/shorts'

import LastAdded from './LastAdded'

class Index extends React.Component {
  componentDidMount() {
    this.props.onGetLastShorts()
  }

  render() {
    return (
      <div>
        <LastAdded title="Короткометражки" content={this.props.lastShorts.data} />
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
  }).isRequired
}
