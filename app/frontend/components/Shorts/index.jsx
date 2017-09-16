import PropTypes from 'prop-types'

const ShortsLayout = ({ children }) => (<div>{children}</div>)

ShortsLayout.propTypes = {
  children: PropTypes.shape({}).isRequired
}

export default ShortsLayout
