import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'

const initialState = {
  counter: 0
}
const rootReducer = (state = initialState, action) => {
  switch (action.type){
    case 'SUMAR':
      return {...state, counter: state.counter + action.payload}
    default:
      return state
  }
}
const minionMiddleware = store => next => action => {
  console.log(action)
  if(action.type === 'GRU'){
    console.log(store.getState())
    store.dispatch({type: 'WIjuuu jeje, GRU GRU GRU'})
  }
  next()
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(minionMiddleware)
))

const Componente = props => <div>Hola mundo</div>

ReactDOM.render(<Provider store={store}>
  <Componente></Componente>
</Provider>, document.getElementById('root'))