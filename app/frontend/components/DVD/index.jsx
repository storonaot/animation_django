import PropTypes from 'prop-types'

const DVDLayout = ({ children }) => <div>{children}</div>

DVDLayout.propTypes = {
  children: PropTypes.shape({}).isRequired
}

export default DVDLayout
