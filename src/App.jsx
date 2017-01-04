import React from 'react';

import Navigation from './components/Navigation';
import Category from './components/Category';

const App = (props) => {
  const { cats, catfood } = props.data.products;

  return (
    <div>
      <Navigation items={props.data.navigation} />
      <Category desc={catfood.desc} items={catfood.items} />
      <Category desc={cats.desc} items={cats.items} />
      <h1>Kitten Store</h1>
    </div>
  );
};

App.propTypes = {
  data: React.PropTypes.object,
};

export default App;
