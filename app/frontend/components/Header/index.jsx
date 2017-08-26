import PropTypes from 'prop-types'
import { AppBar } from 'material-ui'
import { Tabs, Tab } from 'material-ui/Tabs'
import styles from './styles'

const HeaderComp = ({ router }) => {
  let currentTab = 0

  const changeTab = (value) => {
    currentTab = value
    switch (value) {
      case 0:
        router.push('/')
        break
      case 1:
        router.push('shorts')
        break
      case 2:
        router.push('full-length')
        break
      case 3:
        router.push('serials')
        break
      case 4:
        router.push('dvd')
        break
      default:
        router.push('/')
        break
    }
  }

  return (
    <AppBar showMenuIconButton={false}>
      <Tabs initialSelectedIndex={currentTab} className={styles.navigation} tabItemContainerStyle={{ height: '100%' }} onChange={changeTab}>
        <Tab label="Home" value={0} />
        <Tab label="Короткометражки" value={1} />
        <Tab label="Полнометражки" value={2} />
        <Tab label="Сериалы" value={3} />
        <Tab label="DVD" value={4} />
      </Tabs>
    </AppBar>
  )
}

HeaderComp.propTypes = {
  router: PropTypes.shape({}).isRequired
}

export default HeaderComp
