import styles from './styles'

const Item = ({ film, type }) => {
  console.log('film', film)
  return (
    <a
      href={`/#/${type}/${film.id}`}
      className={styles.item}
      style={{ backgroundImage: `url(${film.cover.upload_path})` }}
    >
      <div className={styles.filmTitle}>{film.title || film.original_title}</div>
    </a>
  )
}

export default Item

Item.propTypes = {
  film: PropTypes.shape({}).isRequired,
  type: PropTypes.oneOf(['shorts', 'fulllength', 'serials', 'dvd']).isRequired
}
// import PropTypes from 'prop-types'
// import { Col } from 'react-flexbox-grid'
// import Paper from 'material-ui/Paper'
// import CheckCircle from 'material-ui/svg-icons/action/check-circle'
// import Visibility from 'material-ui/svg-icons/action/visibility'
// import Favorite from 'material-ui/svg-icons/action/favorite'
// import { Card, CardMedia, CardTitle, CardHeader } from 'material-ui/Card'
// import moment from 'helpers/moment'
// import styles from './styles'
//
// const paperStyles = {
//   width: '100%',
//   cursor: 'pointer'
// }
//
// const backgroundImage = cover => ({
//   backgroundImage: cover ? `url(${cover.upload_path})`
//     : 'url(http://gamelayer.ru/gameimg/igry-vremja-prikljuchenij-1.jpg)'
// })
//
// const Item = ({ content, showMoreDetails }) => (
//   <Col md={2}>
//     <Paper style={paperStyles} zDepth={2}>
//       <Card onClick={() => { showMoreDetails(content.id) }}>
//         <CardHeader style={{ textAlign: 'right' }}>
//           <CheckCircle />
//           <Visibility />
//           <Favorite />
//         </CardHeader>
//         <CardMedia
//           overlay={
//             <CardTitle
//               title={content.title}
//               subtitle={`${content.original_title} (${moment(content.release_date, 'YYYY')} г.)`}
//             />
//           }
//         >
//           <div
//             className={styles.image}
//             style={backgroundImage(content.cover)}
//           />
//         </CardMedia>
//       </Card>
//     </Paper>
//   </Col>
// )
//
// export default Item
//
// Item.propTypes = {
//   content: PropTypes.shape({}).isRequired,
//   showMoreDetails: PropTypes.func.isRequired
// }
