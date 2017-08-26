import PropTypes from 'prop-types'
import styles from './styles'

const Title = ({ title, type }) => {
  const getTitle = () => {
    if (type === 'h1') return <h1 className={styles.h1}>{title}</h1>
    else if (type === 'h2') return <h2 className={styles.h2}>{title}</h2>
    else if (type === 'h3') return <h3 className={styles.h3}>{title}</h3>
    else if (type === 'h4') return <h4 className={styles.h4}>{title}</h4>
    else if (type === 'h5') return <h5 className={styles.h5}>{title}</h5>
    return <h6>{title}</h6>
  }
  return getTitle()
}

Title.defaultProps = {
  type: 'h3'
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string
}

export default Title
