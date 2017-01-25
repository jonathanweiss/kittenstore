/* eslint-disable no-unused-vars */

import React from 'react';
import { Match, Miss } from 'react-router';

import Homepage from './components/Homepage';
import About from './components/About';
import Cart from './components/Cart';
import Category from './components/Category';
import Contact from './components/Contact';
import Detail from './components/Detail';
import Error404 from './components/Error404';
import List from './components/List';
import Navigation from './components/Navigation';
import SearchResult from './components/SearchResult';

const App = (props, context) => {
  const { navigationData, categories, products } = props.data;
  const { cats } = products;

  const pathParts = context.history.location.pathname.split('/');

  return (
    <div>
      <Navigation
        items={navigationData}
        activePath={`/${pathParts[1]}`}
      />

      <Match exactly pattern="/about" component={About} />
      <Match exactly pattern="/contact" component={Contact} />
      <Match exactly pattern="/cart" component={Cart} />

      <Miss component={Error404} />
    </div>
  );
};

App.propTypes = {
  data: React.PropTypes.object,
};

App.contextTypes = {
  history: React.PropTypes.object,
};

export default App;

/* eslint-enable no-unused-vars */
