const Label = ({ label, fieldId }) => (
  <label htmlFor={fieldId}>{label}</label>
)

Label.propTypes = {
  label: PropTypes.string.isRequired,
  fieldId: PropTypes.string.isRequired
}

export default Label
