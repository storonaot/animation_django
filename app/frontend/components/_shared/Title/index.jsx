import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './styles'

const Title = ({ children, type, shiftedBottom, handleClick }) => {
  const classList = classNames({
    [`${styles[type]}`]: true,
    [styles.shiftedBottom]: shiftedBottom,
    [styles.interactive]: handleClick
  })

  if (handleClick) {
    return (<a
      onClick={handleClick}
      role="button"
      tabIndex={0}
      className={classList}
    >{children}</a>)
  }
  if (type === 'h1') return <h1 className={classList}>{children}</h1>
  else if (type === 'h2') return <h2 className={classList}>{children}</h2>
  else if (type === 'h3') return <h3 className={classList}>{children}</h3>
  else if (type === 'h4') return <h4 className={classList}>{children}</h4>
  else if (type === 'h5') return <h5 className={classList}>{children}</h5>
  return <h6 className={classList}>{children}</h6>
}

Title.defaultProps = {
  type: 'h3',
  shiftedBottom: true,
  handleClick: null
}

Title.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired,
  type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  shiftedBottom: PropTypes.bool,
  handleClick: PropTypes.func
}

export default Title
