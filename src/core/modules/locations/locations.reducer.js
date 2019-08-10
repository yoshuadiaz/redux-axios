import actions from './locations.actions'

const initialState = {
  items: [],
  isLoading: false,
  hasError: false
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case actions.LOAD:
      return {
        ...state,
        isLoading: true,
        hasError: false
      }
    case actions.LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: action.payload
      }
    case actions.LOAD_FAILURE:
      return {
        ...state,
        isLoading: false,
        hasError: true
      }
    default:
      return state
  }
}

export default reducer