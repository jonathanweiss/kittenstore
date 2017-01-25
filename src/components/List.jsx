import React from 'react';

const headers = ['Name', 'Age', 'Weight', 'Gender', 'Price'];

// We'll remove the hashes when we integrate react-router ;)
/* eslint-disable jsx-a11y/href-no-hash */
const List = (props) => {
  const { slug, type, sortedBy, sortDirection, location } = props;
  let products = props.data.filter(product => product.breedSlug === slug);

  const renderHeader = (text) => {
    const value = text.toLowerCase();
    const arrowName = sortDirection === 'desc' ? 'down' : 'up';
    let direction;

    if (value === sortedBy) {
      direction = sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      direction = 'asc';
    }

    return (
      <th key={`${type}/${text}`}>
        <a href="#">{text}</a>
        {text.toLowerCase() === sortedBy ? <span className={`icon icon-arrow-${direction}2`} /> : null}
        {value === sortedBy ? <span className={`icon icon-arrow-${arrowName}2`} /> : null}
      </th>
    );
  };

  const renderProducts = () => (
    <div className="columns">
      <div className="column col-12">
        <h2>All &ldquo;{products[0].breed}&rdquo;</h2>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              {headers.map(text => renderHeader(text, sortedBy, sortDirection === 'desc' ? 'down' : 'up'))}
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              const { age, weight, gender, price } = product;

              return (
                <tr key={`${location}/${product.slug}`}>
                  <td><a href="#">{product.name}</a></td>
                  <td>{age} weeks</td>
                  <td>{weight} oz</td>
                  <td>{gender === 'male' ? '♂' : ' ♀'}</td>
                  <td>${price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderEmpty = () => (
    <div className="columns">
      <div className="column col-12">
        <section className="empty">
          <i className="icon icon-baffled" />
          <p className="empty-title">No product found for category &ldquo;{slug}&rdquo;.</p>
          <p className="empty-meta">Try a different category.</p>
          <a href="#">
            <button className="empty-action btn btn-primary">Browse for products</button>
          </a>
        </section>
      </div>
    </div>
  );

  if (sortedBy) {
    products = products.sort((a, b) => {
      const trueValue = sortDirection === 'desc' ? -1 : 1;
      const falseValue = sortDirection === 'desc' ? 1 : -1;

      return a[props.sortedBy] > b[props.sortedBy] ? trueValue : falseValue;
    });
  }

  return products.length ? renderProducts() : renderEmpty();
};

List.propTypes = {
  slug: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  data: React.PropTypes.array.isRequired,
  location: React.PropTypes.string,
  sortedBy: React.PropTypes.string,
  sortDirection: React.PropTypes.string,
};

List.defaultProps = {
  location: '',
};

export default List;
/* eslint-enable jsx-a11y/href-no-hash */
