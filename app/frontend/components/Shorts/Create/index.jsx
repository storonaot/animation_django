import { Container, Row, Input } from '_shared'

class ShortsCreate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      originalTitle: '',
      description: '',
      hours: '',
      minutes: '',
      seconds: ''
    }

    this.updateValue = this.updateValue.bind(this)
  }

  updateValue(name, value) {
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
          </form>
        </Row>
      </Container>
    )
  }
}

export default ShortsCreate
