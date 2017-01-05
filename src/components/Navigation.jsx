import React from 'react';

const Navigation = props => (
  <header className="navbar">
    <section className="navbar-section">
      <a href="/" className="btn btn-link">
        <i className="icon icon-home" /> KittenStore
      </a>
      { props.items.map(entry => <a href={entry.link} className="btn btn-link" key={entry.link}>{entry.text}</a>) }
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
};

export default Navigation;
