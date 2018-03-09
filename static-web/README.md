### Unittest with Jasmine

## Install Webpack
- `npm init` -> To initialize a project
- Project Structure
#
    ```
    R-TESTING
    ├── node_modules
    ├── assets
    │   └── css
            └── cal.css
        └── js
            └── cal.js
    ├── .gitignore
    ├── calculator.html
    ├── webpack.config.js
    ├── package.json
    └── README.md
    ```
- `Install webpack — save -dev` -> to install webpack
- create file `webpack.config.js` => config webpack
- run `html-webpack-plugin --save-dev`
- run `extract-text-webpack-plugin --save-dev`
- `npm install node-sass style-loader sass-loader file-loader --save-dev` -> to read css, sass
- `npm install webpack-dev-server --save-dev` -> to install `webpack-dev-server`
- run `npm start` -> to run webpack


## Install Jasmine
- `npm install --save-dev jasmine` -> install Jasmine
- `jasmine init` -> To initialize a project for Jasmine
- `npm install jsdom`, `npm install jquery`-> to read property in jquery
- `jasmine` ->To run your test suite

