import React from 'react';
import { Link } from 'react-router';

const Navigation = (props) => {
  const topLevelPath = `/${props.location.pathname.split('/')[1]}`;

  return (
    <header className="navbar">
      <section className="navbar-section">
        <a href="/" className={`btn btn-link ${topLevelPath === '/' ? 'btn-link-active' : ''}`}>
          <i className="icon icon-home" /> KittenStore
        </a>
        { props.items.map((entry) => {
          const cssClasses = ['btn', 'btn-link'];

          if (topLevelPath === entry.link) {
            cssClasses.push('btn-link-active');
          }

          return (
            <Link
              to={entry.link}
              className={cssClasses.join(' ')}
              key={entry.link}
            >
              {entry.text}
            </Link>);
        }) }
      </section>
      <section className="navbar-section">
        <div className="input-group input-inline">
          <input className="form-input" type="text" placeholder="search" />
          <button className="btn btn-primary input-group-btn">Search</button>
        </div>
      </section>
    </header>
  );
};

Navigation.propTypes = {
  items: React.PropTypes.array,
  location: React.PropTypes.object,
};

export default Navigation;
