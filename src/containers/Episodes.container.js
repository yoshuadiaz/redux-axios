import {connect} from 'react-redux'
import EpisodesView from '../views/Episodes.view'
import Actions from '../core/modules/episodes/episodes.actions'

const mapStateToProps = state => ({
  episodes: state.Episodes.items,
  isLoading: state.Episodes.isLoading,
  hasError: state.Episodes.hasError
})

const mapDispatchToProps = dispatch => ({
  loadEpisodes: () => dispatch({
    type:Actions.LOAD
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(EpisodesView)