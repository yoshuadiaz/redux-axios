import actionTypes from './characters.actions'
const initialState = {
  items: [],
  isLoading: false,
  hasError: false,
  meCaenGordos: false
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case actionTypes.LOAD:
      return {
        ...state,
        isLoading: true,
        hasError: false
      }
    case actionTypes.LOAD_SUCCESS:
      return {...state,
      items: action.payload,
      isLoading: false
      }
    case actionTypes.LOAD_FAILURE:
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