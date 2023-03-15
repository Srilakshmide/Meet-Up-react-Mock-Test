import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import LoginRegister from './components/LoginRegister'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/register" component={LoginRegister} />
    <Route component={NotFound} />
  </Switch>
)

export default App
