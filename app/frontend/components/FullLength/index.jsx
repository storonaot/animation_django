import PropTypes from 'prop-types'

const FullLengthLayout = ({ children }) => <div>{children}</div>

FullLengthLayout.propTypes = {
  children: PropTypes.shape({}).isRequired
}

export default FullLengthLayout
