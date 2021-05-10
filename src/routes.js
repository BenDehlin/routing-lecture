import {Switch, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import AboutUs from './components/AboutUs'
import Info from './components/Info'
import Profile from './components/Profile'

export default (
  <Switch>
    <Route exact path='/' component={Dashboard} />
    <Route path='/about_us' component={AboutUs} />
    <Route path='/info' component={Info} />
    <Route path='/profile/:id' component={Profile} />
  </Switch>
)