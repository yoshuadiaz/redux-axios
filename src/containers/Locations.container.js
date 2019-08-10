import {connect} from 'react-redux'
import LocationsView from '../views/Locations.view'
import actions from '../core/modules/locations/locations.actions'

const mapStateToProps = state => ({
  locations: state.Locations.items || [],
  isLoading: state.Locations.isLoading || false,
  hasError: state.Locations.hasError || false
})

const mapDispatchToProps = dispatch => ({
  loadLocations: () => dispatch({
    type: actions.LOAD
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(LocationsView)