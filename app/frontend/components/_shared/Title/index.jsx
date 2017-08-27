import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './styles'

const Title = ({ title, type, marginBottom }) => {
  const classList = classNames({
    [styles.h1]: type === 'h1',
    [styles.h2]: type === 'h2',
    [styles.h3]: type === 'h3',
    [styles.h4]: type === 'h4',
    [styles.h5]: type === 'h5',
    [styles.h6]: type === 'h6',
    [styles.shiftedBottom]: marginBottom
  })
  return <h2 className={classList}>{title}</h2>
}

Title.defaultProps = {
  type: 'h3',
  marginBottom: true
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  marginBottom: PropTypes.bool
}

export default Title
