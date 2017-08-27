import PropTypes from 'prop-types'

const ShortsLayout = ({ children, router }) => {
  console.log('router', router)
  return <div>{children}</div>
}
// const ShortsLayout = () => <div>ShortsLayout</div>

ShortsLayout.propTypes = {
  children: PropTypes.shape({}).isRequired,
  router: PropTypes.shape({}).isRequired
}

export default ShortsLayout
