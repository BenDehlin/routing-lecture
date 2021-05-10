// In our App component we are importing our Header as well
// as our routes file. Instead of rendering each file directly here
// we will define our routes over in ./routes.js and import that file
// to be rendered here.

import './App.css';
// We import our Header so we can display it above all of our other pages
// and we also import the jsx from our routes file.
import routes from './routes'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      {/* Here we render the Header and below that the contents of our routes.js file */}
      <Header />
      {routes}
    </div>
  );
}

// Go look in ./routes.js next so you can see how we structured defining each of our routes.
export default App;
