## What I did to set up
1. run `npx create-react-app routing-lecture` and cd'd into it
2. run `npm install react-router-dom`
3. imported `HashRouter` into `./src/index.js` (not the same as the index.js on a server) and wrapped it around my `App` component
4. created `./src/routes.js` to define the routes for my application
5. imported `./src/routes.js` into `./src/App.js` to render my routes inside my application

## What you need to do to fork/clone the project
1. fork and clone my repo
2. cd into the cloned repo
3. run `npm install` to install our dependencies. Note that you don't need to install react-router-dom because it is already included in the dependencies because I ran npm install react-router-dom during the lecture.

## What files are important?
1. `./src/index.js` will be where we start if you want to follow all of my notes
2. `./src/routes.js` will be where we define our routes
3. `./src/App.js` will be where we import and render our `./src/routes.js` file
4. `./src/components/Header.js` Will be a component we render in `./src/App.js` above all of our other routes
5. `./src/components/Dashboard.js` will be our "Home" route, or the route we land on if we don't specify a different url
6. `./src/components/AboutUs.js` and `./src/components/Info.js` are 2 different routes we have that will not have any real logic in them but just render a different "page"
7. `./src/components/Profile.js` will be our Profile page. When we route to this component we will be expected to pass an id param on the end of the url so we know what "Profile" we're supposed to be looking at.