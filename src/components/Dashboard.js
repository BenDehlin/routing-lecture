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