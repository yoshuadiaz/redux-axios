import {combineReducers} from 'redux'
import Episodes from './modules/episodes/episodes.reducer'
import Characters from './modules/characters/characters.reducer'
import Locations from './modules/locations/locations.reducer'

export default combineReducers({
  Episodes,
  Characters,
  Locations
})