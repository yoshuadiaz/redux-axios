import {connect} from 'react-redux'
import CharactersView from '../views/Characters.view'
import actions from '../core/modules/characters/characters.actions'

const mapStateToProps = state => ({
  characters: state.Characters.items,
  isLoading: state.Characters.isLoading,
  hasError: state.Characters.hasError
})

const mapDispatchToProps = dispatch => ({
  loadCharacters: (page) => dispatch({type: actions.LOAD, payload: page})
})

export default connect(mapStateToProps, mapDispatchToProps)(CharactersView)