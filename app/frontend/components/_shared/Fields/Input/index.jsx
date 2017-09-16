import FieldWrapper from '../FieldWrapper'
import Label from '../Label'
import styles from '../styles'

const Input = ({
  value, handleInput, label, name
}) => {
  const labelComp = label ? <Label label={label} fieldId={name} /> : null
  return (
    <FieldWrapper>
      {labelComp}
      <input
        className={styles.textInput}
        value={value}
        onChange={(e) => { handleInput(name, e.target.value) }}
        name={name}
        id={name}
      />
    </FieldWrapper>
  )
}

Input.defaultProps = {
  value: '',
  handleInput: () => {},
  label: null
}

Input.propTypes = {
  value: PropTypes.string,
  handleInput: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string.isRequired
}


export default Input
