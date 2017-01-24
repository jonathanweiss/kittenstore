import React from 'react';

// We'll remove the hashes when we integrate react-router ;)
/* eslint-disable jsx-a11y/href-no-hash */
const renderNavItem = (entry, activePath) => {
  const cssClasses = [
    'btn',
    'btn-link',
    activePath === entry.link ? 'btn-link-active' : '',
  ];

  return (
    <a href="#" className={cssClasses.join(' ')} key={entry.link}>
      {entry.icon ? <i className={`icon icon-${entry.icon}`} /> : null}
      {entry.text}
    </a>
  );
};

const startSearch = (textboxRef) => {
  const term = textboxRef.value;

  if (term.length > 0) {
    // perform search
  }
};

const Navigation = (props) => {
  const { activePath } = props;
  let textboxRef = null;

  /* eslint-disable no-return-assign */
  return (
    <header className="navbar">
      <section className="navbar-section">
        { props.items.map(entry => renderNavItem(entry, activePath)) }
      </section>
      <section className="navbar-section">
        <div className="input-group input-inline">
          <input className="form-input" type="text" placeholder="search" ref={ref => textboxRef = ref} />
          <button className="btn btn-primary input-group-btn" onClick={() => startSearch(textboxRef)}>Search</button>
        </div>
      </section>
    </header>
  );
  /* eslint-enable no-return-assign */
};

Navigation.propTypes = {
  items: React.PropTypes.array,
  activePath: React.PropTypes.string,
};

Navigation.defaultProps = {
  items: [],
  activePath: '/',
};

export default Navigation;
/* eslint-enable jsx-a11y/href-no-hash */
