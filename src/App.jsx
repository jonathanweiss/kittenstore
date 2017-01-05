import React from 'react';

import Navigation from './components/Navigation';
import Category from './components/Category';
import About from './components/About';
import Cart from './components/Cart';
import Error404 from './components/Error404';
import Detail from './components/Detail';
import List from './components/List';

const App = (props) => {
  const { categories, products } = props.data;
  const { cats, catfood } = categories;

  const catData = products.cats;

  return (
    <div>
      <Navigation items={props.data.navigation} />

      { /* List view for a specific race */ }
      <List slug="burmese" data={catData} />

      { /* Product detail view */ }
      <Detail slug="snowball" data={catData} />

      { /* Simple static components */ }
      <About />
      <Cart />
      <Error404 />

      { /* Category component */ }
      <Category desc={catfood.desc} items={catfood.items} />
      <Category desc={cats.desc} items={cats.items} />
    </div>
  );
};

App.propTypes = {
  data: React.PropTypes.object,
};

export default App;
