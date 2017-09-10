import classNames from 'classnames'
import styles from './styles'

const Container = ({ children, className }) => {
  const classList = classNames({
    [className]: className || false,
    [styles.container]: true
  })
  return (
    <div className={classList}>{children}</div>
  )
}

Container.defaultProps = {
  className: null
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired,
  className: PropTypes.string
}

export default Container
