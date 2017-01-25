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

      <Match
        pattern="/"
        exactly
        render={() => (
          <Homepage
            amountOfProducts={2}
            products={cats}
          />
        )}
      />

      <Match
        pattern="/catfood"
        exactly
        render={() => (
          <Category
            desc={categories.catfood.desc}
            items={categories.catfood.items}
          />
        )}
      />

      <Match
        pattern="/cats"
        exactly
        render={() => {
          const { desc, items } = categories.cats;
          return (
            <Category desc={desc} items={items} />
          );
        }}
      />

      <Match
        pattern="/search/:term"
        exactly
        render={({ params }) => (
          <SearchResult
            term={params.term}
            data={cats}
          />
        )}
      />

      <Match
        pattern="/cats/:breed"
        exactly
        render={({ params, location }) => {
          const { sortedBy, sortDirection } = location.query ? location.query : { sortedBy: null, sortDirection: null };

          return (
            <List
              slug={params.breed}
              pathname={location.pathname}
              sortedBy={sortedBy}
              sortDirection={sortDirection}
              type="cats"
              data={cats}
            />
          );
        }}
      />

      <Match
        pattern="/cats/:breed/:catName"
        exactly
        render={({ params }) => (
          <Detail
            data={cats}
            slug={params.catName}
          />
        )}
      />


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
