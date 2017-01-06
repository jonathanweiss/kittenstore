import React from 'react';
import { Link } from 'react-router';

// We'll remove the hashes when we integrate react-router ;)
/* eslint-disable jsx-a11y/href-no-hash */
const renderNavItem = (entry, activePath) => {
  const cssClasses = [
    'btn',
    'btn-link',
    activePath === entry.link ? 'btn-link-active' : '',
  ];

  return (
    <Link to={entry.link} className={cssClasses.join(' ')} key={entry.link}>
      {entry.isHomeLink ? <i className="icon icon-home" /> : null}
      {entry.text}
    </Link>
  );
};

const Navigation = props => (
  <header className="navbar">
    <section className="navbar-section">
      { props.items.map(entry => renderNavItem(entry, props.activePath)) }
    </section>
    <section className="navbar-section">
      <div className="input-group input-inline">
        <input className="form-input" type="text" placeholder="search" />
        <button className="btn btn-primary input-group-btn">Search</button>
      </div>
    </section>
  </header>
);

Navigation.propTypes = {
  items: React.PropTypes.array,
  activePath: React.PropTypes.string,
};

export default Navigation;
/* eslint-enable jsx-a11y/href-no-hash */
