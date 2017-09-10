import PropTypes from 'prop-types'
import styles from './styles'

const BreadCrumbs = ({ crumbs }) => {
  // console.log('crumbs', crumbs)
  return <div className={styles.breadcrumbs}>Хлебные крошки</div>
}

BreadCrumbs.propTypes = {
  crumbs: PropTypes.arrayOf(React.PropTypes.string).isRequired
}

export default BreadCrumbs
