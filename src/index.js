import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import '../node_modules/spectre.css/dist/spectre.min.css';
import './index.css';

import data from './mockData';

/* eslint-disable react/jsx-filename-extension */
ReactDOM.render(
  <App data={data} />,
  document.getElementById('root'),
);
/* eslint-enable react/jsx-filename-extension */
