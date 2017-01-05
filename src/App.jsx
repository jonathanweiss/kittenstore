import React from 'react';

import Homepage from './components/Homepage';

const App = props => (
  <Homepage amountOfProducts={3} data={props.data} />
);

App.propTypes = {
  data: React.PropTypes.object,
};

export default App;
