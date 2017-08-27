import Title from '_shared/Title'
import Divider from 'material-ui/Divider'
import { Row, Col } from 'react-flexbox-grid'
import Paper from 'material-ui/Paper'

const paperStyles = {
  padding: '20px',
  marginBottom: '20px'
}

const ShortsList = () => (
  <div>
    <Row>
      <Col md={12}>
        <Title title="Короткометражки" type="h2" />
        <Divider />
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <Paper style={paperStyles} zDepth={2}>Hello</Paper>
      </Col>
      <Col md={6}>
        <Paper style={paperStyles} zDepth={2}>Hello</Paper>
      </Col>
      <Col md={6}>
        <Paper style={paperStyles} zDepth={2}>Hello</Paper>
      </Col>
      <Col md={6}>
        <Paper style={paperStyles} zDepth={2}>Hello</Paper>
      </Col>
    </Row>
  </div>
)

export default ShortsList
