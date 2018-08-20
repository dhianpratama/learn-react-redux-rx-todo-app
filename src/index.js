import 'rxjs';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { createEpicMiddleware } from 'redux-observable';

import TodoMain from './containers/TodoMain';
import TodoDetail from './containers/TodoDetail';
import App from './containers/App';
import { reducers, epics } from './modules';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleware = createEpicMiddleware(epics);

const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(epicMiddleware),
  ),
);
const history = syncHistoryWithStore(
  browserHistory,
  store
);

render(
  // eslint-disable-next-line react/jsx-filename-extension
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={TodoMain} />
        <Route path='todos/:id' component={TodoDetail} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root'),
);