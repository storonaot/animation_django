import Container from '_shared/Container'
import { Link } from 'react-router'
import styles from './styles'

const Header = () => (
  <header className={styles.header}>
    <Container className={styles.headerContainer}>
      <Link to="/">Logo</Link>
      <nav>
        <Link
          to="shorts"
          className={styles.menuItem}
          activeClassName={styles.isActive}
        >Shorts</Link>
        <Link
          to="full-length"
          className={styles.menuItem}
          activeClassName={styles.isActive}
        >Full Length</Link>
        <Link
          to="serials"
          className={styles.menuItem}
          activeClassName={styles.isActive}
        >Serials</Link>
        <Link
          to="dvd"
          className={styles.menuItem}
          activeClassName={styles.isActive}
        >DVD</Link>
      </nav>
    </Container>
  </header>
)

export default Header
