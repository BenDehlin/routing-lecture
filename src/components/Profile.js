// In the Profile component currently we are just displaying an h1 that says
// Profile Page and underneath that we are displaying an h2 that says:
// User and then the id we pulled off of our params. Note that to access our
// params we are saying props.match.params.id. The reason why our param is called
// id is because we defined it that way in our routes file by saying :id at the end
// of the url.
// If you forget where the param information is stored remember you can console log
// your props to see the history/match/location objects and what they contain. All 3 of
// these objects have very useful data and functions that we can use in different ways
// for routing around our app.

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

// That's it! We had 2 other routes the ./AboutUs.js component and the ./Info.js component
// but neither one of them did anything other than render some information.