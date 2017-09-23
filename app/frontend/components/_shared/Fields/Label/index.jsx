import styles from './styles'

const Label = ({ label, fieldId }) => (
  <label
    htmlFor={fieldId}
    className={styles.label}
  >{label}</label>
)

Label.propTypes = {
  label: PropTypes.string.isRequired,
  fieldId: PropTypes.string.isRequired
}

export default Label
