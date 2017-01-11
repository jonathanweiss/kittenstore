/* eslint-disable no-unused-vars */

import React from 'react';
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

// Toggle this flag to see all components
const SHOW_ALL_COMPONENTS = false;

const App = (props) => {
  const { navigation, categories, products } = props.data;
  const { cats } = products;

  if (SHOW_ALL_COMPONENTS) {
    return (
      <div>
        <About />
        <hr />
        <Error404 />
        <hr />
        <Cart />
        <hr />
        <Contact />
        <hr />
        <Navigation activePath="/" items={navigation} />
        <hr />
        <SearchResult term="el" data={cats} />
        <hr />
        <SearchResult term="yyyyyyyyyyy" data={cats} />
        <hr />
        <Category desc="cats" items={categories.cats.items} />
        <hr />
        <List type="cats" slug="javanese" data={cats} sortedBy="name" sortDirection="asc" />
        <hr />
        <Detail slug="twinkle" data={cats} />
        <hr />
        <Detail slug="snickers" data={cats} showDetails={false} />
        <hr />
      </div>
    );
  } else { // eslint-disable-line
    return (
      <div>
        <Navigation items={navigation} activePath="/" />
        <Homepage amountOfProducts={2} data={props.data} />
      </div>
    );
  }
};

App.propTypes = {
  data: React.PropTypes.object,
};

export default App;

/* eslint-enable no-unused-vars */
