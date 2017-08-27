import PropTypes from 'prop-types'

const ShortsShow = ({ router }) => {
  console.log('router ShortsShow', router)

  return <div>Hello ShortsShow</div>
}

ShortsShow.propTypes = {
  router: PropTypes.shape({}).isRequired
}

export default ShortsShow
