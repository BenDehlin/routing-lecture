// Our Dashboard is a very simple example of how we can use params. In this case
// we have 2 links that link to 2 different profiles. If I click the first link
// it will link to the profile component with "1" as the id param. If I click the
// second link it will link to the profile component with "2" as the id param. Go double
// check the routes file to see that the reason the param works is because we included
// :id on the end of the url. If we do not define our params in the Switch it will not work
// here.
import {Link} from 'react-router-dom'

const Dashboard = () => {
  return(
    <div>
      <h1>Dashboard</h1>
      <Link to='/profile/1'>User 1</Link>
      <Link to='/profile/2'>User 2</Link>
    </div>
  )
}

export default Dashboard

// Next go look at the ./Profile.js file to see what this link will do.