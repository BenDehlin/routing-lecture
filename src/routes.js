// For our routes to work we need to import Switch and Route from
// react-router-dom
import {Switch, Route} from 'react-router-dom'
// Here we also import any of our other components that we would like to
// be a "route" for our website.
import Dashboard from './components/Dashboard'
import AboutUs from './components/AboutUs'
import Info from './components/Info'
import Profile from './components/Profile'

// Here we export some JSX to be imported into App.js. In this case it'll
// just be our Switch with each of our routes defined inside. The Switch will
// determine which component to render based on what our URL says.
export default (
  <Switch>
    {/* Here we have a route for each component we care about. Note that our '/' path
    has exact in front of it, this is so that we don't accidentally render the Dashboard
    instead of every other component we want to render. The structure of a Route is that it
    needs to have a path or what the url is for this route, and a component or what we want
    to display for each route. */}
    <Route exact path='/' component={Dashboard} />
    <Route path='/about_us' component={AboutUs} />
    <Route path='/info' component={Info} />
    <Route path='/profile/:id' component={Profile} />
  </Switch>
)

// Go take a look at ./components/Header.js to see what our Header will display. Remember
// from App.js that the Header will appear above all of the rest of our components