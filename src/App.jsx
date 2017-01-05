import React from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';

import Homepage from './components/Homepage';
import Error404 from './components/Error404';
import Navigation from './components/Navigation';
import About from './components/About';
import Contact from './components/Contact';
import Category from './components/Category';
import Cart from './components/Cart';

const App = (props) => {
  const categories = props.data.categories;

  return (
    <BrowserRouter>
      <div> {/* Router MUST only have a single child! */}
        <Navigation items={props.data.navigation} />

        <Match exactly pattern="/about" component={About} />
        <Match exactly pattern="/contact" component={Contact} />
        <Match exactly pattern="/cart" component={Cart} />

        <Match
          exactly
          pattern="/"
          render={() => (
            <Homepage amountOfProducts={3} data={props.data} />
          )}
        />

        <Match
          pattern="/catfood"
          render={() => (
            <Category desc={categories.catfood.desc} items={categories.catfood.items} />
          )}
        />

        <Match
          pattern="/cats"
          render={() => (
            <Category desc={categories.cats.desc} items={categories.cats.items} />
          )}
        />

        <Miss component={Error404} />
      </div>
    </BrowserRouter>
  );
};

App.propTypes = {
  data: React.PropTypes.object,
};

export default App;
