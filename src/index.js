import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom'
import Episodes from './containers/Episodes.container'
import rootReducer from './core/rootReducer'
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
const Characters = props => <div>Personajes</div>

ReactDOM.render(<Provider store={store}>
  <Router>
  <header>
    <NavLink exact to="/">Home</NavLink>
    <NavLink to="/characters">Personajes</NavLink>
  </header>
  <Switch>
    <Route exact path="/" component={Episodes}></Route>
    <Route path="/characters" component={Characters}></Route>
    <Route>
      <h1>404</h1>
      <h2>Mentiroso! Eso ni etsiste!!!</h2>
    </Route>
  </Switch>
  </Router>
</Provider>, document.getElementById('root'))