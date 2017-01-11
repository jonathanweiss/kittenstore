import React from 'react';
import { Match, Miss } from 'react-router';

import Homepage from './components/Homepage';
import Error404 from './components/Error404';
import Navigation from './components/Navigation';
import About from './components/About';
import Contact from './components/Contact';
import Category from './components/Category';
import Cart from './components/Cart';
import List from './components/List';
import Detail from './components/Detail';
import SearchResult from './components/SearchResult';

const getFirstPartOfPath = (pathname) => {
  const parts = pathname.split('/');
  return (parts.length > 0) ? `/${parts[1]}` : '/';
};

const App = (props, context) => {
  const { categories, products, navigationData } = props.data;
  const { cats, catfood } = products;

  return (
    <div>
      <Navigation activePath={getFirstPartOfPath(context.location.pathname)} items={navigationData} />

      <Match exactly pattern="/about" component={About} />
      <Match exactly pattern="/contact" component={Contact} />
      <Match exactly pattern="/cart" component={Cart} />

      <Match exactly pattern="/" render={() => <Homepage amountOfProducts={3} data={props.data} />} />
      <Match exactly pattern="/catfood" render={() => <Category desc={categories.catfood.desc} items={categories.catfood.items} />} />
      <Match exactly pattern="/cats" render={() => <Category desc={categories.cats.desc} items={categories.cats.items} />} />

      <Match
        exactly
        pattern="/cats/:breed"
        render={({ params, location }) => {
          const sortedBy = location.query ? location.query.sortedBy : '';
          const sortDirection = location.query ? location.query.sortDirection : '';

          return (
            <List
              type="cats"
              slug={params.breed}
              data={cats}
              sortedBy={sortedBy}
              sortDirection={sortDirection}
            />
          );
        }}
      />

      <Match
        exactly
        pattern="/catfood/:brand"
        render={({ params }) => (<List type="catfood" slug={params.brand} data={catfood} sortedBy="price" sortDirection="up" />)}
      />

      <Match pattern="/cats/:breed/:catName" render={({ params }) => <Detail slug={params.catName} data={cats} displayRelated />} />

      <Match pattern="/search/:term" render={({ params }) => <SearchResult term={params.term} data={cats} />} />

      <Miss component={Error404} />
    </div>
  );
};

App.propTypes = {
  data: React.PropTypes.object,
};

App.contextTypes = {
  location: React.PropTypes.object,
};

export default App;
