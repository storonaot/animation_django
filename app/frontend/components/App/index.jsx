import Header from 'Header'
import Footer from 'Footer'
import styles from './styles'

const App = ({ children }) => (
  <div className={styles.bodyWrapper}>
    <Header />
    <main className={styles.mainWrapper}>{children}</main>
    <Footer />
  </div>
)

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired
}

export default App
