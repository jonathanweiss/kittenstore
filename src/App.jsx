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

const App = (props, context) => {
  const categories = props.data.categories;
  const { cats, catfood } = props.data.products;

  return (
    <div>
      <Navigation activePath={context.location.pathname} items={props.data.navigation} />

      <Match exactly pattern="/about" component={About} />
      <Match exactly pattern="/contact" component={Contact} />
      <Match exactly pattern="/cart" component={Cart} />

      <Match exactly pattern="/" render={() => <Homepage amountOfProducts={3} data={props.data} />} />
      <Match exactly pattern="/catfood" render={() => <Category desc={categories.catfood.desc} items={categories.catfood.items} />} />
      <Match exactly pattern="/cats" render={() => <Category desc={categories.cats.desc} items={categories.cats.items} />} />

      <Match pattern="/cats/:race" render={({ params }) => <List type="cats" slug={params.race} data={cats} />} />
      <Match pattern="/catfood/:brand" render={({ params }) => <List type="catfood" slug={params.brand} data={catfood} />} />

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
