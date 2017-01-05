import React from 'react';

import Navigation from './components/Navigation';
import Category from './components/Category';

const App = (props) => {
  const categories = props.data.categories;
  const { cats, catfood } = categories;

  return (
    <div>
      <Navigation items={props.data.navigation} />
      <Category desc={catfood.desc} items={catfood.items} />
      <Category desc={cats.desc} items={cats.items} />
    </div>
  );
};

App.propTypes = {
  data: React.PropTypes.object,
};

export default App;
