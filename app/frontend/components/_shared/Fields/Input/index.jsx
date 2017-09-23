import FieldWrapper from '../FieldWrapper'
import Label from '../Label'
import styles from '../styles'

const Input = ({
  value, handleInput, label, name, nowrap, placeholder
}) => {
  const labelComp = label ? <Label label={label} fieldId={name} /> : null
  const inputComp = (
    <input
      className={styles.textInput}
      value={value}
      onChange={(e) => { handleInput(name, e.target.value) }}
      name={name}
      id={name}
      placeholder={placeholder}
    />
  )

  if (nowrap) return inputComp
  return (
    <FieldWrapper>
      {labelComp}
      {inputComp}
    </FieldWrapper>
  )
}

Input.defaultProps = {
  value: '',
  handleInput: () => {},
  label: null,
  nowrap: false,
  placeholder: ''
}

Input.propTypes = {
  value: PropTypes.string,
  handleInput: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  nowrap: PropTypes.bool,
  placeholder: PropTypes.string
}


export default Input
