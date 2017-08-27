import PropTypes from 'prop-types'
import { Col } from 'react-flexbox-grid'
import Paper from 'material-ui/Paper'
import { Card, CardMedia, CardTitle } from 'material-ui/Card'
import moment from 'helpers/moment'
import styles from './styles'

console.log(moment(123456, 'LL'))

const paperStyles = {
  width: '100%',
  cursor: 'pointer'
}

const backgroundImage = cover => ({
  backgroundImage: cover ? `url(${cover.upload_path})`
    : 'url(http://gamelayer.ru/gameimg/igry-vremja-prikljuchenij-1.jpg)'
})

const Item = ({ content }) => (
  <Col md={2}>
    <Paper style={paperStyles} zDepth={2}>
      <Card>
        <CardMedia
          overlay={
            <CardTitle
              title={content.title}
              subtitle={`${content.original_title} (${moment(content.release_date, 'YYYY')} г.)`}
            />
          }
        >
          <div
            className={styles.image}
            style={backgroundImage(content.cover)}
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
