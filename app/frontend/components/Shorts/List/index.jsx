const ShortsList = () => (<div>ShortsList</div>)
export default ShortsList

// import { connect } from 'react-redux'
// import { getShorts } from 'store/actions/shorts'
//
// import Title from '_shared/Title'
// import Divider from 'material-ui/Divider'
// import { Row, Col } from 'react-flexbox-grid'
// import Paper from 'material-ui/Paper'
//
// const paperStyles = {
//   padding: '20px',
//   marginBottom: '20px'
// }
//
// class ShortsList extends React.Component {
//   componentDidMount() {
//     this.props.onGetShorts()
//   }
//
//   render() {
//     const getCover = (short) => {
//       if (short.cover) {
//         return <img src={short.cover.upload_path} alt={short.original_title} />
//       }
//       return <div>Нет изображения</div>
//     }
//
//     console.log('props', this.props.shorts)
//     if (this.props.shorts.loading) {
//       return (<div>Loading...</div>)
//     } else if (this.props.shorts.errors) {
//       return (<div>Errors...</div>)
//     }
//     return (
//       <div>
//         <Row>
//           <Col md={12}>
//             <Title title="Короткометражки" type="h2" />
//             <Divider />
//           </Col>
//         </Row>
//         <Row>
//           {this.props.shorts.data.map(short => (
//             <Col key={short.id} md={6}>
//               <Paper style={paperStyles} zDepth={2}>
//                 {getCover(short)}
//                 <div>{short.title}</div>
//                 <div>{short.original_title}</div>
//                 <div>{short.description}</div>
//                 <div>Режиссеры:&nbsp;
//                   {short.directors.map(director => (
//                     <span key={director.id}>{director.name}</span>
//                   ))}
//                 </div>
//                 <div>Дата: {short.release_date}</div>
//               </Paper>
//             </Col>
//           ))}
//         </Row>
//       </div>
//     )
//   }
// }
//
// // export default ShortsList
// export default connect(
//   (state, ownProps) => ({
//     shorts: state.shorts,
//     ownProps
//   }),
//   dispatch => ({
//     onGetShorts: () => {
//       dispatch(getShorts())
//     }
//   })
// )(ShortsList)
//
// ShortsList.propTypes = {
//   onGetShorts: PropTypes.func.isRequired,
//   shorts: PropTypes.shape({
//     data: PropTypes.array,
//     loading: PropTypes.bool,
//     errors: PropTypes.object
//   }).isRequired
// }
