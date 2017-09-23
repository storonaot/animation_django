import { Container, Row, Input, TimeInput } from '_shared'

class ShortsCreate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      time: '',
      originalTitle: '',
      description: ''
    }

    this.updateValue = this.updateValue.bind(this)
  }

  updateValue(name, value) {
    console.log(name, value)
    this.setState({ [name]: value })
  }

  render() {
    return (
      <Container>
        <Row>
          <form>
            <Input
              label="Title"
              name="title"
              value={this.state.title}
              handleInput={this.updateValue}
            />
            <TimeInput
              label="Time"
              name="time"
              value={{}}
              handleInput={this.updateValue}
            />
          </form>
        </Row>
      </Container>
    )
  }
}

export default ShortsCreate
