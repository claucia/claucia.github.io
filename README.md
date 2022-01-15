# Personal website: claucia.com

This is the source code of my personal website available at [claucia.com](https://claucia.com).

## Running the app for development

1. Run `npm install` to download the dependencies. The `node_modules` folder will be created.
1. Run `npm run start` to start a server at `http://localhost:1234`.
 - Parcel.js will build the application and make the artifacts available in the `dist` folder.
 - The SCSS files will be converted to CSS files.
 - Chrome will open a new tab, displaying the application.
 - As the application is developed, Parcel.js will watch for code changes, and will instruct the browser to reload the page. Like magic!
 - The contents of the `dist` folder are deleted by Parcel.js. So the contents of the `dist` folder must not be touched!

## Building the app

Run `npm run build` to build the application. The application artifacts will be available in the `dist` folder.

## Deploying the app in GitHub Pages

Run `npm run deploy` to build and deploy the application in GitHub Pages. The application artifacts will be available in the `dist` folder, and then copied to the `gh-pages` branch. Push the changes to GitHub. The `gh-pages` branch will be used by GitHub Pages to make the static content available in the web.