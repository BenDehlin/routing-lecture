// We want our Header to contain links to route us around the rest of our application.
// In order for this to work we need to import Link from react-router-dom. In this example
// we do not need to use withRouter but I included it so you can see it in action.
// If we DID need access to history/match/location objects in our header here we would need
// to use withRouter higher order component to accomplish this. REMEMBER only direct children
// of the Switch get access to history/match/location automatically. If we had needed to use
// any of these things we would need to use withRouter here.
import {Link, withRouter} from 'react-router-dom'

const Header = (props) => {
  // here I'm console logging our props to demonstrate I have access to history/match/location
  // because I used withRouter.
  console.log("Header Props", props)
  return(
    <header className='header'>
      {/* Here I am rendering a link to push me to 3 of our 4 pages. Note how each link has a "to"
      prop that defines what it will change the url to say. This needs to match whatever is in
      our ../routes.js file. */}
      <Link to='/'>Dashboard</Link>
      <Link to='/about_us'>About Us</Link>
      <Link to='/info'>Info</Link>
    </header>
  )
}

// Here I wrap my export in withRouter. This is what gives me access to history/match/location
// when I'm not a direct child of the Switch.
export default withRouter(Header)

// When you're done here go take a look at ./Dashboard.js