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

### Craco

Craco is used for overriding configuration, specially Webpack's. See [configuration file](src/craco.config.js).

- '@' alias points to 'src'.

Notice in the package.json, that scripts are being execute from craco, instead of react-scripts.

## Notes

### Error boundaries

ErrorBoundary component is defined to wrap any component which needs to handle errors instead of broking the interface, i.e.:

```
<ErrorBoundary>
  <YourComponent />
</ErrorBounday>
```

In development mode, the error will be shown. It has been tested that it doesn't happen in production mode.

### Modules

The code challenge doesn't require a complex scaffold, so the meaning of module here is a feature or container which groups components that can't have sense being alone, has routes / nested routes, etc.

In that case, I'm considering the module PODCAST uniquely which includes nested views. In case of creating a new module, it'd have the same structure.

Another way to split a module is by the main resource which points to: / (that could be /podcast), /podcast/{podcastId}, /podcast/{podcastId}/episode/{episodeId}.

### Routes

All routes from modules are imported within routes.js file. I prefer to keep them in a separated file.

Route components are **loaded lazily**, increasing the load speed without unnecesary imports until they are.
