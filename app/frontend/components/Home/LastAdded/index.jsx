import Item from './Item'
import AddItem from './AddItem'
import styles from './styles'

const LastAdded = ({ films, type }) => (
  <div className={styles.list}>
    {films.map(film => (
      <Item key={film.id} film={film} type={type} />
    ))}
    <AddItem type={type} />
  </div>
)

export default LastAdded

LastAdded.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  type: PropTypes.oneOf(['shorts', 'fulllength', 'serials', 'dvd']).isRequired
}

// import PropTypes from 'prop-types'
// import { Row, Col } from 'react-flexbox-grid'
// import { Divider } from 'material-ui'
// import Title from '_shared/Title'
// import ContentAddCircle from 'material-ui/svg-icons/content/add-circle'
// import { lime600, lime800 } from 'material-ui/styles/colors'
//
// import Item from './Item'
// import styles from './styles'
//
// const iconStyles = {
//   width: 40,
//   height: 40,
//   cursor: 'pointer'
// }
//
// const LastAdded = ({ title, content, goToCreatePage, name, showMoreDetails }) => {
//   console.log('hhh')
//   return (
//     <div>
//       <Row>
//         <Col md={12}>
//           <div className={styles.titleBlock}>
//             <Title title={title} type="h2" marginBottom={false} />
//             <ContentAddCircle
//               style={iconStyles}
//               color={lime600}
//               hoverColor={lime800}
//               onClick={() => goToCreatePage(name)}
//             />
//           </div>
//           <Divider />
//         </Col>
//       </Row>
//       <Row>
//         {content.map(item => (<Item
//           key={item.id}
//           content={item}
//           showMoreDetails={showMoreDetails}
//         />))}
//       </Row>
//     </div>
//   )
// }
//
// export default LastAdded
//
// LastAdded.defaultProps = {
//   content: []
// }
//
// LastAdded.propTypes = {
//   title: PropTypes.string.isRequired,
//   content: PropTypes.arrayOf(
//     PropTypes.shape({})
//   ),
//   goToCreatePage: PropTypes.func.isRequired,
//   name: PropTypes.string.isRequired,
//   showMoreDetails: PropTypes.func.isRequired
// }
