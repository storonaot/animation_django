import PropTypes from 'prop-types'
import { Col } from 'react-flexbox-grid'
import Paper from 'material-ui/Paper'
import { Card, CardMedia, CardTitle } from 'material-ui/Card'
import styles from './styles'

const paperStyles = {
  width: '100%',
  cursor: 'pointer'
}

const Item = ({ content }) => (
  <Col md={2}>
    <Paper style={paperStyles} zDepth={2}>
      <Card>
        <CardMedia overlay={<CardTitle title={content.title} subtitle={`${content.original_title} (${content.release_date})`} />}>
          <div
            className={styles.image}
            style={{ backgroundImage: 'url(http://www.sobaka.ru/images/image/00/37/94/46/normal_Adventure_Time_WHAT_TIME_IS_IT.jpg)' }}
          />
        </CardMedia>
      </Card>
    </Paper>
  </Col>
)

export default Item

Item.propTypes = {
  content: PropTypes.shape({}).isRequired
}
