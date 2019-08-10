import {combineReducers} from 'redux'
import Episodes from './modules/episodes/episodes.reducer'
import Characters from './modules/characters/characters.reducer'

export default combineReducers({
  Episodes,
  Characters
})