import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import lastShorts from './lastShorts'
import lastFullLength from './lastFullLength'
import lastDVDs from './lastDVDs'
import lastEpisodes from './lastEpisodes'
import shorts from './shorts'

export default combineReducers({
  routing: routerReducer,
  lastShorts,
  lastFullLength,
  lastDVDs,
  lastEpisodes,
  shorts
})


// import { combineReducers } from 'redux'
// import { routerReducer } from 'react-router-redux'
//
// import serials from './serials'
// import serial from './serial'
// import seasons from './seasons'
// import season from './season'
// import episodes from './episodes'
//
// import countries from './countries'
// import directors from './directors'
// import studios from './studios'
// import mediacontainers from './mediacontainers'
// // import translators from './translators'
// import videoformats from './videoformats'
// // import voiceovers from './voiceovers'
//
// export default combineReducers({
//   routing: routerReducer,
//   serials,
//   serial,
//   countries,
//   directors,
//   seasons,
//   season,
//   episodes,
//   mediacontainers,
//   // translators,
//   videoformats,
//   // voiceovers,
//   studios
// })
