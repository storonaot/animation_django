import PropTypes from 'prop-types'

const SerialsLayout = ({ children }) => <div>{children}</div>

SerialsLayout.propTypes = {
  children: PropTypes.shape({}).isRequired
}

export default SerialsLayout
