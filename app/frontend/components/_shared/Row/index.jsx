import styles from './styles'

const Row = ({ children }) => (
  <div className={styles.row}>{children}</div>
)

Row.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired
}

export default Row
