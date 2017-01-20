import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import '../node_modules/spectre.css/dist/spectre.min.css';
import './index.css';

import data from './mockData';
import store from './store';

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App data={data} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
