import PropTypes from 'prop-types'

const ShortsLayout = ({ children }) => <div>{children || 0}</div>
// const ShortsLayout = () => <div>ShortsLayout</div>

ShortsLayout.propTypes = {
  children: PropTypes.shape({}).isRequired
}

export default ShortsLayout
