import { BrowserRouter } from 'react-router';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import '../node_modules/spectre.css/dist/spectre.min.css';
import './index.css';

import data from './mockData';

ReactDOM.render(
  <BrowserRouter>
    <App data={data} />
  </BrowserRouter>,
  document.getElementById('root'),
);
