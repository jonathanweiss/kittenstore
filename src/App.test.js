import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/* eslint-disable react/jsx-filename-extension */
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
/* eslint-enable react/jsx-filename-extension */
