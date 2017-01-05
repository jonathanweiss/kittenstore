import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import '../node_modules/spectre.css/dist/spectre.min.css';
import './index.css';

import data from './mockData';

ReactDOM.render(
  <App data={data} />, // eslint-disable-line
  document.getElementById('root'),
);
