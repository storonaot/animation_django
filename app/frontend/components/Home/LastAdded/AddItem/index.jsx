import styles from './styles'

const AddItem = ({ type }) => (
  <a href={`/#/${type}/create`} className={styles.item}>
    <div className={styles.plus} />
  </a>
)

AddItem.propTypes = {
  type: PropTypes.oneOf(['shorts', 'fulllength', 'serials', 'dvd']).isRequired
}

export default AddItem
