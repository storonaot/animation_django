import styles from './styles'

const FieldWrapper = ({ children }) => (
  <div className={styles.fieldWrapper}>{children}</div>
)

FieldWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired
}

export default FieldWrapper
