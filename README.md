# Getting Started with Create React App

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

### `npm run prettier`

Runs prettier for JavaScript, styles and md files.

## Relevant tools and packages

- VS-Code Gitflow plugin.
- [Github release notes](https://github-tools.github.io/github-release-notes) for CHANGELOG.md management. The package is connected directly to the repository via scope token. [See configuration file](/.grenrc).
- [Husky](https://typicode.github.io/husky/) for Git hooks.
- [Prettier](https://prettier.io/) for code formatting, integrated within Husky Git hooks. It has been also set as npm script `npm run prettier`.
- [Source map explorer](https://www.npmjs.com/package/source-map-explorer) for analyzing bundle output.
- [node-sass](https://www.npmjs.com/package/node-sass) for using SASS instead of plain CSS.
- [axios](https://github.com/axios/axios) for network request management.

## Styling

### Folders

Styles files are placed within _src/assets/styles/_. You'll notice that the files are splitted in two different folders:

- _vars_ for SCSS variables.
- _app_ for rest of purposes.

Both are imported with a barrier file within the App.js file to be available from anywhere.

### Post-Processing CSS

Post processing is in charge of:

- Adding vendor prefixes.
- Adding polyfills for older browsers.
- Minifying CSS files.
