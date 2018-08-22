# Todo-App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Try the demo [Here](http://react-redux-rx-todo.dhianpratama.com)

## Requirements
* node `^5.0.0`
* yarn `^0.23.0` or npm `^3.0.0`

## How to run
1. Navigate to project directory
2. Run `yarn` or `npm i`
2. Run `yarn run api` or `npm run api` to serve api server at http://localhost:3001
3. In new tab run `yarn start` or `npm start` to serve todo-app at http://localhost:3000

## How to build and run production bundle
1. Navigate to project directory
2. Run `yarn build` or `npm run build`
3. Bundle files will be saved to build folder
4. Run `yarn add global serve` or `npm i -g serve`
5. Run `serve -s build` to serve todo-app (production mode) at http://localhost:5000

Data will be saved into `db.json` file.

## Project Structure
```
.
├─- build                    # All build-related code
├── public                   # Static public assets 
│   ├── index.html           # Static HTML page
├── src                      # Application source code
│   ├── actions              # All redux's actions
│   ├── components           # Global Reusable UI Components
│   ├── constants            # All constant variables (e.g actions name)
│   ├── containers           # Global Reusable Container Components
│   ├── epics                # All epics function for Rx Redux
│   ├── reducers             # All redux's reducers
│   ├── selectors            # All state's selectors
│   └── styles               # All styling scss files
├── index.js                 # Init application
```
