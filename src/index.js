import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom'
import Episodes from './containers/Episodes.container'
import Characters from './containers/Characters.container'
import rootReducer from './core/rootReducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './core/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(sagaMiddleware)
))

sagaMiddleware.run(rootSaga)

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