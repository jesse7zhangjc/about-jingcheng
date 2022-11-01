### [jingchengzhang.me](https://jingchengzhang.me)

My simple personal website app. Built from scratch using modern javascript with Node.js, React, TypeScript, Semantic UI and many other technologies. It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). This web app can be easily modified and deployed to Github Pages.

## Setup

### More deailts about setup coming soon...

## Tech Stack

- [Create React App](https://github.com/facebook/create-react-app) - Bootstrap the app quickly
- [React Function Components and Hooks](https://reactjs.org/docs/hooks-state.html#hooks-and-function-components) - Reusable logic (and components of course)
- [TypeScript](https://www.typescriptlang.org/) - Type checking
- [React Router](https://reactrouter.com/) - Make components navigational
- [Semantic UI React](https://react.semantic-ui.com/) - React UI framework
- [ESLint](https://eslint.org/), [Prettier](https://prettier.io/) and [Pre-commit Hook with lint-staged](https://prettier.io/docs/en/precommit.html#option-1-lint-stagedhttpsgithubcomokonetlint-staged) - Code formatting
- [Jest](https://jestjs.io/) and [Enzyme](https://enzymejs.github.io/enzyme/) - Testing
- [Axios](https://github.com/axios/axios) - Promise based HTTP client
- [Github RESTful APIs](https://docs.github.com/en/rest/reference/repos#get-a-repository) - Get repo stats

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### `npm run predeploy`

Launches the tests and then builds the app for production. It's a combination of `npm test` and `npm run build`.<br />
If any of the tests failed, the predployment will be stopped.

### `npm run deploy`

Runs the predeployment mentioned above and then deploys it to Github Pages.
