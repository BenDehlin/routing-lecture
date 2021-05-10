import {Link, withRouter} from 'react-router-dom'

const Header = (props) => {
  console.log("Header Props", props)
  return(
    <header className='header'>
      <Link to='/'>Dashboard</Link>
      <Link to='/about_us'>About Us</Link>
      <Link to='/info'>Info</Link>
    </header>
  )
}

export default withRouter(Header)