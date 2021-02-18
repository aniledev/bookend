# API Powered Bookmark Application

<!-- TABLE OF CONTENTS -->
## Contents 
<details open="open">
  <summary>Contents</summary>
  <ol>
    <li><a href="#github-lives-pages">GitHub Live Pages</a></li>
    <li><a href="#about">About This Project</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#user-stories">User Stories</a></li>
    <li><a href="#technical-aspects">Technical Aspects</a></li>
    <li><a href="#upcoming-features">Upcoming Features</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>


## GitHub Live Pages

https://thinkful-ei-unicorn.github.io/elinam-bookmark-app/


## About This Project

In this project, I created an API powered bookmark application. The project has a RESTful API and allows for full CRUD actions. Use this bookmark app to collected websites and links you want to share or come back to while clicking through the web. 



![Bookmark Application](https://github.com/aniledev/elinam-bookmark-app/blob/gh-pages/bookmark-app.png?raw=true)


## Built With

This application is an API powered bookmark creation app that relies on:
* [JavaScript](https://www.javascript.com/)
* [jQuery](https://jquery.com)
* [Node](https://nodejs.org/)
* [Webpack](https://webpack.js.org/)


## User Stories

#### As a user:

- I can add bookmarks to my bookmark list. Bookmarks contain a title (required), URL (required), description (optional), and rating 1 to 5 (optional).
- I can see a list of my bookmarks when I first open the app.
- When I first open the application, all bookmarks in the list default to a "condensed" view showing only title and rating.
- I can click on a bookmark to display the "detailed" view.
- When I expand a bookmark, the detailed view expands to additionally display description and a "Site" link.
- I can remove bookmarks from my bookmark list.
- I receive appropriate feedback when I cannot submit a bookmark.
- I can select from a dropdown a "minimum rating" to filter the list by all bookmarks rated at or above the chosen selection.


## Technical Aspects

- Use fetch for AJAx calls and jQuery for DOM manipulation
- Use ES6 namespacing principles to adhere to good architecture practices
- Minimal global variables
- Create modules in separate files to organize your code
- Follows the React-ful design pattern
- Responsive and mobile-first design
- Follows a11y best practices


<hr/>

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

<hr/>
## Upcoming Features

- User can update rating and description input
- Expand all/Collapse all button at the top of the home page

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements
* [Normalize.css](https://necolas.github.io/normalize.css/)
* [Font Awesome](https://fontawesome.com)
* [Thinkful Coding Bootcamp](https://www.thinkful.com/)

