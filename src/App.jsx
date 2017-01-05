import React from 'react';

import Navigation from './components/Navigation';
import Category from './components/Category';
import About from './components/About';
import Cart from './components/Cart';
import Error404 from './components/Error404';
import Contact from './components/Contact';
import Detail from './components/Detail';
import List from './components/List';
import SearchResult from './components/SearchResult';

const App = (props) => {
  const { categories, products } = props.data;
  const { cats, catfood } = categories;

  const catData = products.cats;

  return (
    <div>
      <Navigation items={props.data.navigation} />

      { /* Empty result page */ }
      <SearchResult term="xxxxxxx" data={catData} />

      { /* Search result for "el" */ }
      <SearchResult term="el" data={catData} />

      { /* List view for cats of race "burmese" */ }
      <List slug="burmese" data={catData} />

      { /* Product detail page for "Snowball" */ }
      <Detail slug="snowball" data={catData} />

      { /* Category component */ }
      <Category desc={catfood.desc} items={catfood.items} />
      <Category desc={cats.desc} items={cats.items} />

      { /* Simple static components */ }
      <About />
      <Error404 />
      <Cart />
      <Contact />
    </div>
  );
};

App.propTypes = {
  data: React.PropTypes.object,
};

export default App;
