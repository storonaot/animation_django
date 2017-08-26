import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid'
import Divider from 'material-ui/Divider'
import Title from '_shared/Title'
import Item from './Item'

// const testContent = {
//   title: 'Лида ЖОПКА',
//   subTitle: 'Писька',
//   imageUrl: 'http://www.sobaka.ru/images/image/00/37/94/46/normal_Adventure_Time_WHAT_TIME_IS_IT.jpgs'
// }

// const LastAdded = ({ title, content }) => (
//   <div>
//     <Row>
//       <Col md={12}>
//         <Title title={title} type="h2" />
//         <Divider />
//       </Col>
//     </Row>
//     <Row>
//       {content.map(item => <Item content={item} />)}
//     </Row>
//   </div>
// )

const LastAdded = ({ title, content }) => {
  console.log('content', content)
  return (
    <div>
      <Row>
        <Col md={12}>
          <Title title={title} type="h2" />
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

// {this.props.serials.data.map(serial => {
//              return <li key={serial._id}>
//                      <Link to={`serials/${serial._id}`}>{serial.title}</Link>
//                      <span onClick={this.deleteSerial.bind(this, serial._id)}>Удалить</span>
//                     </li>
//            })}

LastAdded.defaultProps = {
  content: []
}

LastAdded.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(
    PropTypes.shape({})
  )
}
