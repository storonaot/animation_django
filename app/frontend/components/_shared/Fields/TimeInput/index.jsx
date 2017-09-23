import Input from '../Input'
import FieldWrapper from '../FieldWrapper'
import Label from '../Label'
import styles from './styles'

const checkDecimal = (value) => {
  if (value !== '') return !!value.match(/^\d+$/)
  return true
}

class TimeInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hours: '',
      minutes: '',
      seconds: ''
    }

    this.updateValue = this.updateValue.bind(this)
  }

  updateValue(name, value) {
    if (checkDecimal(value)) {
      this.setState(
        { [name]: value },
        () => { this.props.handleInput(this.props.name, this.convertToMs()) }
      )
    }
  }

  convertToMs() {
    const hours = Number(this.state.hours) * 3.6e+6 // 3600000
    const minutes = Number(this.state.minutes) * 60000
    const seconds = Number(this.state.seconds) * 1000
    return hours + minutes + seconds
  }

  render() {
    return (
      <FieldWrapper>
        <Label label={this.props.label} fieldId="hours" />
        <div className={styles.inputGroup}>
          <Input
            name="hours"
            value={this.state.hours}
            handleInput={this.updateValue}
            placeholder="hours"
            nowrap
          />
          <span className={styles.divider}>:</span>
          <Input
            name="minutes"
            value={this.state.minutes}
            handleInput={this.updateValue}
            placeholder="minutes"
            nowrap
          />
          <span className={styles.divider}>:</span>
          <Input
            name="seconds"
            value={this.state.seconds}
            handleInput={this.updateValue}
            placeholder="seconds"
            nowrap
          />
        </div>
      </FieldWrapper>
    )
  }
}

TimeInput.defaultProps = {
  label: 'Time',
  name: 'time'
}

TimeInput.propTypes = {
  handleInput: PropTypes.func.isRequired,
  label: PropTypes.string,
  name: PropTypes.string
}

export default TimeInput
