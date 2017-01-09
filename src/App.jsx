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

const SHOW_ALL_COMPONENTS = true;

const App = (props) => {
  if (SHOW_ALL_COMPONENTS) {
    const { categories, products } = props.data;
    const { cats } = products;

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
        <Navigation />
        <hr />
        <SearchResult term="el" data={cats} />
        <hr />
        <Category desc="cats" items={categories.cats.items} />
        <hr />
        <List type="cats" slug="javanese" data={cats} />
        <hr />
        <Detail slug="twinkle" data={cats} />
        <hr />
      </div>
    );
  } else {
    return (<Homepage amountOfProducts={3} data={props.data} />);
  }
};

App.propTypes = {
  data: React.PropTypes.object,
};

export default App;
