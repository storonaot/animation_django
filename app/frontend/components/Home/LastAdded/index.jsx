import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid'
import { Divider } from 'material-ui'
import Title from '_shared/Title'
import ContentAddCircle from 'material-ui/svg-icons/content/add-circle'
import { lime600, lime800 } from 'material-ui/styles/colors'

import Item from './Item'
import styles from './styles'

const iconStyles = {
  width: 40,
  height: 40,
  cursor: 'pointer'
}

const LastAdded = ({ title, content, goToCreatePage, name }) => {
  console.log('hhh')
  return (
    <div>
      <Row>
        <Col md={12}>
          <div className={styles.titleBlock}>
            <Title title={title} type="h2" marginBottom={false} />
            <ContentAddCircle
              style={iconStyles}
              color={lime600}
              hoverColor={lime800}
              onClick={() => goToCreatePage(name)}
            />
          </div>
          <Divider />
        </Col>
      </Row>
      <Row>
        {content.map(item => <Item key={item.id} content={item} />)}
      </Row>
    </div>
  )
}

export default LastAdded

LastAdded.defaultProps = {
  content: []
}

LastAdded.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(
    PropTypes.shape({})
  ),
  goToCreatePage: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
}
