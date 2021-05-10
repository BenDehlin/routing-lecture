const Profile = (props) => {
  console.log(props)
  return(
    <div>
      <h1>Profile Page</h1>
      <h2>User {props.match.params.id}</h2>
    </div>
  )
}

export default Profile