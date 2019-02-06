# React Router Transition Demo
Created by @suhmantha1 for Use All Five's Lunch n' Learn.

## Libraries
`react-router`
`react-router-dom`
`react-transition-group`


## Sources
1. React Docs
2. React routing issues: https://medium.com/onfido-tech/animations-with-react-router-8e97222e25e1
3. https://reacttraining.com
4. https://reactcommunity.org/react-transition-group/
5. How to build simple fade animation: https://www.youtube.com/watch?v=NUQkajBdnmQ
6. Explanatory for TransitionGroup: https://medium.com/@pshrmn/a-shallow-dive-into-react-router-v4-animated-transitions-4b73f634992a
7. Base transitions on page history: https://blog.etch.team/react-page-transitions-make-your-website-feel-native-bf2804b011dc

## Steps
1. Implement `<BrowserRouter>` in `index.js`, which will automatically handle route history and UI component display
2. Add `Switch` in `app.js`, which renders routes based on the specified tag.
3. Install `react-transition-group`, and import in `app.js` in order to use around the `Switch`
4. In `app.js`, create wrap the `Switch` in a `CSSTransition`
5. In `app.js`, wrap the `CSSTransition` in a `TransitionGroup`
6. Render an empty route in `app.js`, and move the `TransitionGroup` inside so that it's always rendered
7. To render multiple pages at the same time in the group by adding `Location Key` to the `CssTransition`. At this point, when you change routes, there is a `timeout` ms time where both pages are rendered at the same time.
8. Pass the `location` to the `Switch` so that it knows what routes to render on transition
9. Add styling to animate the transitions

## React Default Instructions
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
