## How to start:

1. git clone
2. npm install
3. npm start

## Next steps:

- **PROP-TYPES**
1. npm install --save prop-types (*package to define props in components*)
2. import PropTypes from 'prop-types' (*import package in component, in witch it will be using*)
3. use it like in example:
```
...
static propTypes = {
  title: PropTypes.node,
  image: PropTypes.string.isRequired,
}
...
```

## Import data from another file

```
...
import {exampleData, anotherData} from '../../data/dataStore.js';
...
```
(**)

## Navigating through directories
- ./  *go to catalog where current file is*
- ../ *one catalog up*

## Next steps:

- **HTML-PARSER**
1. npm install --save react-html-parser (*package to parse HTML code*)
2. import ReactHtmlParser from 'react-html-parser' (*import package in component, in witch it will be using*)
3. use it like in example:
```
...
<h2>{ReactHtmlParser('Things to do <sup>soon!</sup>')}</h2>
...
```

## Next steps:

- **ESLINT**
1. npm install -D eslint
2. create new file .eslint.json in main catalog (copy from _temp_eslint)
3. add in package.json in srcipts line: "lint": "eslint src/"

## Next steps:

- **ESLINT-PLUGIN-REACT & BABEL-ESLINT**
1. npm install -D eslint-plugin-react
2. npm install -D babel-eslint
3. to start this, type in console: npm run lint

## Next steps:

- **HUSKY** (*to run linter only with commit*)
1. npm install -D husky@4.3.0
2. add in package.json code:
```
...
"husky": {
  "hooks": {
    "pre-commit": "npm run lint"
  }
},
...
```

## Next steps:

- **LINT-STAGED** (*check only changed files, which are changed before last commit*)
1. npm install -D lint-staged
2. add in package.json code:
```
...
"husky": {
  "hooks": {
    "pre-commit": "npm run lint"
  }
},
"lint-staged": {
  "src/**/*.js": "eslint"
},
...
```

## Next steps:

- **React Developer Tools** 
- install developer tools for your browser

## >>>>>>>>>>>>>>>>
## -- ADD REDUX: --

- **REDUX**
1. npm install -S redux@4.0.1 react-redux@7.0.1
2. npm install -D redux-devtools-extension@2.13.8
3. install Redux DevTools 
4. add:
```
import { Provider } from 'react-redux';
import store from ./redux/store;
```
(*object store must exists in store.js file*)
5. switch ReactDom.render on:
```
ReactDOM.render(<Provider store={store}><App /><Provider>, document.getElementById('app'));
```
6. npm install -S shortid


## >>>>>>>>>>>>>>>>
## -- ADD ROUTER: --

- **REACT ROUTER**
1. npm install -S react-router-dom@5.0.0
2. add in webpack.config.js:
- in obj. 'output', above 'scripts_bundle.js':
```
publicPath: '/',
```
(*this setting show main place to assets collect by application*)
- under 'output' obj.:
```
devServer: {
  historyApiFallback: true,
},
```

- **REACT ROUTER TRANSITION**
1. npm install -S react-router-transition@1.4.0
2. to 'App' component add:
 ```
import {AnimatedSwitch} from 'react-router-transition';
},
```
3. change name of 'Switch' component to 'AnimatedSwitch' and add animation parameters