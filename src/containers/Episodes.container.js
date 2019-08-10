import {connect} from 'react-redux'
import EpisodesView from '../views/Episodes.view'

const mapStateToProps = state => ({
  episodes: state.Episodes.items,
  isLoading: state.Episodes.isLoading,
  hasError: state.Episodes.hasError
})

export default connect(mapStateToProps)(EpisodesView)