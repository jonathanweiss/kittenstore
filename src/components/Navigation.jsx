import React from 'react';

const Navigation = props => (
  <div>
    <ul>
      { props.items.map(entry => <li key={entry.link}>{entry.text}</li>) }
    </ul>
  </div>
);

Navigation.propTypes = {
  items: React.PropTypes.array,
};

export default Navigation;
