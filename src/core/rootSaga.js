import { call, put, takeEvery } from 'redux-saga/effects'
import CharactersActions from './modules/characters/characters.actions'
import EpisodesActions from './modules/episodes/episodes.actions'
import LocationsActions from './modules/locations/locations.actions'
import axios from 'axios'

function* loadCharacters(action){
  try {
    const characters = yield call(
      axios.get,
      `https://rickandmortyapi.com/api/character/?page=${action.payload}`
    )
    yield put({type: CharactersActions.LOAD_SUCCESS, payload: characters.data.results})
  } catch (error) {
    yield put({type: CharactersActions.LOAD_FAILURE})
  }
}

function* loadEpisodes(action){
  try {
    const episodes = yield call(
      axios.get,
      'https://rickandmortyapi.com/api/episode'
    )
    yield put({type: EpisodesActions.LOAD_SUCCESS, payload: episodes.data.results})
  } catch (error) {
    yield put({type: EpisodesActions.LOAD_FAILURE})
  }
}

function* loadLocations(action){
  try {
    const locations = yield call(axios.get, 'https://rickandmortyapi.com/api/location/')

    yield put({type: LocationsActions.LOAD_SUCCESS, payload: locations.data.results || []})
  } catch (error) {
    yield put({type: LocationsActions.LOAD_FAILURE})
  }
}

function* rootSaga(){
  yield takeEvery(CharactersActions.LOAD, loadCharacters)
  yield takeEvery(EpisodesActions.LOAD, loadEpisodes)
  yield takeEvery(LocationsActions.LOAD, loadLocations)
}

export default rootSaga