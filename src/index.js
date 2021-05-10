import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
// The first step we need to do to set up routing is import HashRouter
// into our index.js and wrap it around the App Component
import { HashRouter } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    {/* Wrap HashRouter around the App Component here */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
)

reportWebVitals()
// Next step go look at the App.js file
